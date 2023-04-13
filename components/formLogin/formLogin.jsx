"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./formLogin.module.css";
import {
  Match,
  createToast,
} from "../usefulFunctions/usefulFunctions";
import axios from "axios";

const guestForm = {
  firstname: "",
  lastname: "",
  code: "",
};

const FormLogin = () => {
  const port = process.env.NEXT_PUBLIC_PORT;

  const router = useRouter();

  const [form, setForm] = useState(guestForm);
  const [allGuests, setAllGuest] = useState(["sin datos"]);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    getGuests();
  }, []);

  const getGuests = async () => {
    await axios
      .get(`${port}/guest/all`)
      .then((response) => {
        setAllGuest(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (form.firstname === "Eusebio" && form.lastname == "Mendez" && form.code === "house1387"){
      window.sessionStorage.setItem("authenticated", true);
      router.push("/createGuests");
      createToast(
        "success",
        "Bienvenido Eusebio, ya puedes cargar todos tus invitados"
      );
    } else if (form.firstname === "Giovana" && form.lastname == "Mendez" && form.code === "xvgiovaM") {
      window.sessionStorage.setItem("authenticated", true);
      router.push("/createGuests");
      createToast(
        "success",
        "Bienvenida Giova, ya puedes cargar todos tus invitados"
      );
    }  
    else if (Match(allGuests, form.code)) {
      window.sessionStorage.setItem("authenticated", true);
      router.push(`/invitation/${form.lastname}/${form.firstname}`);
      createToast("success", "Bienvenido " + form.firstname);
    } else {
      createToast("error", "Código incorrecto");
    }
  };

  return (
    <div>
      {allGuests[0] !== "sin datos" ? (
        <div className={styles.container}>
          <h1 className={styles.title}>Login</h1>
          <form onSubmit={handleSubmit}>
            <label className={styles.label}>
              Nombre:
              <input
                type="text"
                className={styles.input}
                name="firstname"
                value={form.firstname}
                onChange={handleChange}
              />
            </label>
            <label className={styles.label}>
              Apellido:
              <input
                type="text"
                className={styles.input}
                name="lastname"
                value={form.lastname}
                onChange={handleChange}
              />
            </label>
            <label className={styles.label}>
              Código:
              <div className={styles.passwordContainer}>
                <input
                  type={showPassword ? "text" : "password"}
                  className={styles.input}
                  name="code"
                  value={form.code}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className={styles.showPasswordButton}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🐵" : "🙈"}
                </button>
              </div>
            </label>
            <button type="submit" className={styles.submitButton}>
              Ingresar
            </button>
          </form>
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.spinner} />
        </div>
      )}
    </div>
  );
};

export default FormLogin;
