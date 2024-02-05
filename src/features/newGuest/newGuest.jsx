"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./newGuest.module.css";
import Swal from "sweetalert2";
import { createToast } from "../../components/usefulFunctions/usefulFunctions";
import useStore from "../../../store/store";

const guestData = {
  lastname: "",
  firstname: "",
  state: "No confirmó",
  phone: "",
  amount_guests: 0,
  amount_confirm: 0,
};

const NewGuest = () => {

  const router = useRouter();

  const port = process.env.NEXT_PUBLIC_PORT;

  const allGuestsStore = useStore((state) => state.allGuests);

  const getGuests = useStore((state) => state.getGuests);

  const [guest, setGuest] = useState(guestData);
  const [allGuests, setAllGuest] = useState(allGuestsStore);

  useEffect(() => {
    const authenticated = window.sessionStorage.getItem("authenticated");
    if (!authenticated) {
      router.push("/");
    }
    if(allGuestsStore[0]==="sin datos"){
    getGuests();
    }
  }, []);

  useEffect(() => {
    setAllGuest(allGuestsStore);
  }, [allGuestsStore]);

  const sendData = async (guest) => {
    try {
      const response = await axios.post(`${port}/guest`, guest);
      createToast("success", response.data.msg);
      setGuest(guestData);
      getGuests();
    } catch (error) {
      createToast("error", error.response.data.msg);
    }
  };

  const deleteGuests = async (id) => {
    try {
      await axios.delete(`${port}/guest/${id}`);
      getGuests();
      createToast("success", "Invitado eliminado correctamente");
    } catch (error) {
      console.error(error);
      createToast("error", "No se pudo eliminar");
    }
  };

  const handleChange = (e) => {
    setGuest({
      ...guest,
      [e.target.name]: e.target.value,
    });
  };

  const handleDelete = () => {
    Swal.fire({
      html: `
        <div>
          <h1 style="font-size: 17px;">Eliminar invitado</h1>
          <select id="guest-select" class="swal2-input" style="font-size: 15px;">
            ${allGuests?.map(
              (guest) =>
                `<option value="${guest.id}">${guest.lastname} ${guest.firstname}</option>`
            )}
          </select>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#e7c6c6",
      cancelButtonColor: "#c7b6d7",
    }).then((result) => {
      if (result.isConfirmed) {
        const selectedGuestId = document.getElementById("guest-select").value;
        deleteGuests(selectedGuestId.toString(""));
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { lastname, firstname, phone, amount_guests } = guest;
    if (!lastname || !firstname || !phone || !amount_guests) {
      createToast("error", "Debe completar todos los campos");
      return;
    }
    if (phone.length !== 10) {
      createToast("error", "Debe introducir un teléfono válido");
      return;
    }
    sendData({
      ...guest,
      lastname: lastname.trim(),
      firstname: firstname.trim(),
      phone: "+549" + phone,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.topPage}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.title}>Cargar todos los invitados:</div>
          <label className={styles.label}>
            <p>Apellido:</p>
            <input
              type="text"
              name="lastname"
              placeholder="ingrese el apellido"
              value={guest.lastname}
              onChange={handleChange}
              className={styles.input}
            />
          </label>
          <label className={styles.label}>
            <p>Nombre:</p>
            <input
              type="text"
              name="firstname"
              placeholder="ingrese el nombre"
              value={guest.firstname}
              onChange={handleChange}
              className={styles.input}
            />
          </label>
          <label className={styles.label}>
            <p>Teléfono:</p>
            <input
              type="tel"
              name="phone"
              value={guest.phone}
              placeholder="3878458710"
              onChange={handleChange}
              className={styles.input}
            />
          </label>
          <label className={styles.label}>
            <p>Cantidad de invitados:</p>
            <input
              type="number"
              name="amount_guests"
              value={guest.amount_guests}
              placeholder="0"
              onChange={handleChange}
              className={styles.input}
            />
          </label>
          <button type="submit" className={styles.submitButton}>
            Agregar
          </button>
        </form>
        <div className={styles.divButtons}>
          <button
            className={styles.button}
            onClick={() => {
              router.push("/invitation/demo");
            }}
          >
           💌 Ver Invitación
          </button>
          <button
            className={styles.button}
            onClick={() => {
              router.push("/sendInvitations");
            }}
          >
            📨 Enviar invitaciones
          </button>
          <button className={styles.button} onClick={handleDelete}>
            🗑 Quitar un invitado
          </button>
          <button className={styles.button} onClick={() => {
              router.push("/list");
            }}>
            👨‍👩‍👧‍👦Lista de confirmados
          </button>
        </div>
      </div>
      <div className={styles.divList}>
        <div className={styles.listTitle}>Invitados</div>
        <div>
          <div className={styles.ListContainer}>
            <div className={styles.ListSubTitleNum}>👥</div>
            <div className={styles.ListSubTitleName}>Nombre</div>
            <div className={styles.ListSubTitlePh}>Telefono📲</div>
            <div className={styles.ListSubTitleNum}>👨‍👩‍👧‍👦</div>
          </div>
          {allGuests[0] == "sin datos" ? (
            <div className={styles.spinnerBox}>
              <div className={styles.spinner}></div>
            </div>
          ) : allGuests.length > 0 ? (
            allGuests.map((guest, i) => {
              return (
                <div className={styles.ListContainer} key={i}>
                  <div className={styles.ListNum}>
                    {i + 1}
                  </div>
                  <div className={styles.ListName}>
                    ✔️{guest.lastname} {guest.firstname}
                  </div>
                  <div className={styles.ListPh}>
                    {guest.phone}{" "}
                  </div>
                  <div className={styles.ListNum}>{guest.amount_guests} </div>
                </div>
              );
            })
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default NewGuest;
