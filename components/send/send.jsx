"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./send.module.css";
import { encrypted } from "../usefulFunctions/encryptar";

const Send = () => {
  const router = useRouter();

  const port = process.env.NEXT_PUBLIC_PORT;

  const link = "https://xv-invitation-front.vercel.app/";

  const [code, setCode] = useState("");
  const [guest1, setGuest1] = useState({});
  const [guest2, setGuest2] = useState({});
  const [allGuests, setAllGuest] = useState(["sin datos"]);
  const [guests, setGuests] = useState([]);
  const [family, setFamily] = useState([]);


  const getGuests = async () => {
    await axios
      .get(`${port}/guest/all`)
      .then((response) => {
        setAllGuest(response.data);
        setFamily(response.data.filter(g=>g.amount_guests>1))
        setGuests(response.data.filter(g=>g.amount_guests===1))
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    const authenticated = window.sessionStorage.getItem("authenticated");
    if (!authenticated) {
      router.push("/");
    }
    getGuests();
  }, []);

  function handleSelectGuests(e) {
    setGuest1(guests[e.target.value]);
    setCode(encrypted(guests[e.target.value].name));
  }
  function handleSelectFamily(e) {
    setGuest2(family[e.target.value]);
    setCode(encrypted(family[e.target.value].name));
  }

  const handleSubmitGuests = (e) => {
    e.preventDefault();
    router.push(
      `https://wa.me/${guest1.phone}?text=¡Hola! Quiero invitarte a mi fiesta de 15. Ingresa al siguiente link: ${link} con los siguientes datos: Nombre: ${guest1.name}, Código: ${code}`
    );
  };
  const handleSubmitFamily = (e) => {
    e.preventDefault();
    router.push(
      `https://wa.me/${guest2.phone}?text=¡Hola! Quiero invitarte a mi fiesta de 15. Ingresa al siguiente link: ${link} con los siguientes datos: Nombre: ${guest2.name}, Código: ${code}`
    );
  };

  return (
    <div>
      {allGuests[0] !== "sin datos" ? (
        <div>
          <div className={styles.container}>
            <form onSubmit={handleSubmitGuests} className={styles.form}>
              <div className={styles.inputWrapper}>
                <p>Seleccionar invitado:</p>
                <select id="guest-select" onChange={(e) => handleSelectGuests(e)}>
                  <option defaultValue>-</option>
                  {guests?.map((g, i) => (
                    <option key={g.id} value={i}>
                      {g.name}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className={styles.submitButton}>
                Enviar Invitación
              </button>
            </form>
          </div>
          <div className={styles.container}>
            <form onSubmit={handleSubmitFamily} className={styles.form}>
              <div className={styles.inputWrapper}>
                <p>Seleccionar invitado (Familiar):</p>
                <select id="guest-select" onChange={(e) => handleSelectFamily(e)}>
                  <option defaultValue>-</option>
                  {family?.map((g, j) => (
                    <option key={g.id} value={j}>
                      {g.name}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className={styles.submitButton}>
                Enviar Invitación
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.spinner} />
        </div>
      )}
    </div>
  );
};

export default Send;
