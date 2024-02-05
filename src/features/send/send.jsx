"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./send.module.css";
import { encrypted } from "../../components/usefulFunctions/usefulFunctions";
import Loading from "../../components/loading/loading";
import { IoRose } from "react-icons/io5";
import { GiAmpleDress } from "react-icons/gi";
import { FiHeart } from "react-icons/fi";
import useStore from "../../../store/store";


const Send = () => {
  let iconsArray = [IoRose, GiAmpleDress, FiHeart];

  const router = useRouter();

  const allGuestsStore = useStore((state) => state.allGuests);
  const getGuests = useStore(state => state.getGuests);
  
  const link = "https://xv-invitation-front.vercel.app/";

  const [code, setCode] = useState("");
  const [guest1, setGuest1] = useState({});
  const [guest2, setGuest2] = useState({});
  const [Guests, setAllGuest] = useState(allGuestsStore);
  const [guests, setGuests] = useState(allGuestsStore);
  const [family, setFamily] = useState(allGuestsStore);
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const authenticated = window.sessionStorage.getItem("authenticated");
    if (!authenticated) {
      router.push("/");
    }
    if(Guests[0]==="sin datos"){
      getGuests()
    }
  }, []);

  function handleSelectGuests(e) {
    setGuest1(guests[e.target.value]);
    setCode(
      encrypted(
        guests[e.target.value].lastname + " " + guests[e.target.value].firstname
      )
    );
  }
  function handleSelectFamily(e) {
    setGuest2(family[e.target.value]);
    setCode(
      encrypted(
        family[e.target.value].lastname + " " + family[e.target.value].firstname
      )
    );
  }

  const handleSubmitGuests = (e) => {
    e.preventDefault();
    router.push(
      `https://wa.me/${guest1.phone}?text=*¡Hola!* %0A*¡Quiero invitarte a mi fiesta de 15!* %0ALink: ${link} %0ACódigo: *${code}*`
    );
  };
  const handleSubmitFamily = (e) => {
    e.preventDefault();
    router.push(
      `https://wa.me/${guest2.phone}?text=*¡Hola!* %0A*¡Quiero invitarte a mi fiesta de 15!* %0ALink: ${link} %0ACódigo: *${code}*`
    );
  };

  return (
    <div>
      {Guests[0] !== "sin datos" ? (
        <div>
          <div className={styles.container}>
            <form onSubmit={handleSubmitGuests} className={styles.form}>
              <div className={styles.inputWrapper}>
                <p>Seleccionar invitado:</p>
                <select
                  id="guest-select"
                  onChange={(e) => handleSelectGuests(e)}
                >
                  <option defaultValue>-</option>
                  {guests?.map((g, i) => (
                    <option key={g.id} value={i}>
                      {g.lastname} {g.firstname}
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
                <select
                  id="guest-select"
                  onChange={(e) => handleSelectFamily(e)}
                >
                  <option defaultValue>-</option>
                  {family?.map((g, j) => (
                    <option key={g.id} value={j}>
                      {g.lastname} {g.firstname}
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
        <Loading currentIndex={currentIndex} iconsArray={iconsArray} />
      )}
    </div>
  );
};

export default Send;
