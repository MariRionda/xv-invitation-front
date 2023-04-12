import Swal from "sweetalert2";
import { compare } from "./encryptar";

const bcrypt = require("bcryptjs");

const port = process.env.NEXT_PUBLIC_PORT;

export function encryptName(name) {
  // Generamos un salt (sal) aleatorio
  const salt = bcrypt.genSaltSync(10);
  // Encriptamos el nombre con el salt generado
  const hashedName = bcrypt.hashSync(name, salt);
  // Devolvemos el nombre encriptado
  return hashedName;
}

export function Match(guests, encrypt) {
  let state = false
  guests?.forEach((guest) => {
    if (compare(guest.name, encrypt)) {
      state = true
    }
  });
  return state;
}

export const createToast = (icon, title) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  Toast.fire({
    icon,
    title,
  });
};


export async function getServerSideProps(context) {
  const { name } = context.query;

  const response = await fetch(`${port}/guests/${name}`);
  const guest = response.data;

  return {
    props: { guest },
  };
}