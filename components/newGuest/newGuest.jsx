"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./newGuest.module.css";
import Swal from "sweetalert2";
import {  createToast } from "../usefulFunctions/usefulFunctions";


const guestData = {
  name: "",
  state: "No confirmó",
  phone: "",
  amount_guests: 0,
  amount_confirm: 0,
};

const NewGuest = () => {

  const port = process.env.NEXT_PUBLIC_PORT;

  const router = useRouter();  

  const [guest, setGuest] = useState(guestData);
  const [allGuests, setAllGuest] = useState(["sin datos"]);

  const sendData = async (guest) => {
    await axios
      .post(`${port}/guest`, guest)
      .then((response) => {
        createToast("success", response.data.msg);
        setGuest(guestData);
      })
      .catch((error) => {
        console.error(error);
      });
  };
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
  const deleteGuests = async (id) => {
    await axios
      .delete(`${port}/guest/${id}`)
      .then((response) => {
        setAllGuest(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    console.log(port)
    getGuests();
  }, [guest]);

  const handleChange = (e) => {
    e.preventDefault();
    setGuest({
      ...guest,
      [e.target.name]: e.target.value,
    });
  };

  const handleDelete = ()=>{
    Swal.fire({
      html: `
        <div>
        <h1 style="font-size: 17px;">Eliminar invitado</h1>
        <select id="guest-select" class="swal2-input" style="font-size: 15px;">
          ${allGuests?.map(guest => `<option value="${guest.id}">${guest.name}</option>`)}
        </select>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#e7c6c6",
      cancelButtonColor: '#c7b6d7',
    }).then((result) => {
      if (result.isConfirmed) {
        const selectedGuestId = document.getElementById("guest-select").value;
        deleteGuests(selectedGuestId.toString(''))
        // Aquí eliminarías el invitado seleccionado por ID
        .then(()=>{
          createToast("success", "Invitado eliminado correctamente");
        })
      }
    })
    .catch(()=>{
      createToast("error", "No se pudo eliminar");
    })
    ;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!guest.name) {
      createToast("error", "Debe introducir nombre");
      return;
    }
    if (!guest.phone) {
      createToast("error", "Debe introducir teléfono");
      return;
    }
    if (!guest.amount_guests) {
      createToast("error", "Debe introducir cantidad de invitados");
      return;
    }
    if (guest.phone.length !== 10) {
      createToast("error", "Debe introducir teléfono válido");
      return;
    }
    guest.phone = "+549" + guest.phone;
    sendData(guest);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputWrapper}>
          <label className={styles.label}>
            <p>Nombre completo:</p>
            <input
              type="text"
              name="name"
              placeholder="ingrese el nombre"
              value={guest.name}
              onChange={handleChange}
              className={styles.input}
            />
          </label>
        </div>
        <div className={styles.inputWrapper}>
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
        </div>
        <div className={styles.inputWrapper}>
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
        </div>
        <button type="submit" className={styles.button}>
          Agregar
        </button>
      </form>
      <div className={styles.divList}>
        <div className={styles.listTitle}>Invitados</div>
        <div>
          <div className={styles.ListContainer}>
            <div className={styles.ListSubTitle} style={{width:"20px"}}>👥</div>
            <div className={styles.ListSubTitle} style={{width:"150px"}}>Nombre</div>
            <div className={styles.ListSubTitle} style={{width:"120px"}}>Telefono📲</div>
            <div className={styles.ListSubTitle}>👨‍👩‍👧‍👦</div>
          </div>
          {allGuests[0]=="sin datos"
          ? <div>Cargando...</div>
          :allGuests.length > 0
            ? allGuests.map((guest, i) => {
                return (
                  <div className={styles.ListContainer} key={i}>
                    <div className={styles.List} style={{width:"20px"}}>{i+1}</div>
                    <div className={styles.List} style={{width:"150px"}}>✔️{guest.name}</div>
                    <div className={styles.List} style={{width:"120px"}}>{guest.phone} </div>
                    <div className={styles.List}>{guest.amount_guests} </div>
                  </div>
                );
              })
            : null}
        </div>
        <div className={styles.divButtons}>
          <button className={styles.button} onClick={handleDelete}>Quitar un invitado</button>
          <button className={styles.button} onClick={()=>{router.push("/invitation/demo")}}>Ver Invitación</button>
        </div>
      </div>
    </div>
  );
};

export default NewGuest;
