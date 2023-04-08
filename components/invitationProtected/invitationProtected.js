"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Countdown from "../../components/countDown/countDown";
import Music from "../../components/musicButton/musicButton";
import styles from "./invitationProtected.module.css";
import NavBar from "../navBar/navBar";
import WhereButton from "../whereButton/whereButton";

const InvitationProtected = () => {
 
  const router = useRouter();

  useEffect(() => {
    const authenticated = window.sessionStorage.getItem("authenticated");
    if (!authenticated) {
      router.push("/");
    }
  }, []);

  // Si el usuario está autenticado, mostrar el contenido de la página
  return (
    <div className={styles.container}>
    <NavBar/>
    <Music />
      <div className={styles.firstPage}>
        <div>
          <p className={styles.date}>29.04.2023</p>
        </div>
        <div className={styles.centralDiv}>
          <h1 className={styles.firstname}>Giovana</h1>
          <p className={styles.caption}>Mis 15 años</p>
        </div>
        <div>
          <div><p className={styles.quotationMark}>‘‘</p></div>
          <div><p className={styles.sentence}>Quiero compartir contigo esa noche mágica e inolvidable para mí</p></div>
          <div><p className={styles.quotationMark}>’’</p></div>
        </div>
      </div>

      <div className={styles.counter}>
        <Countdown date="2023-04-30T00:00:00.000Z" />
        <div className={styles.dressCode}>
          <h1>Dress Code</h1>
          <div></div>
          <h3>Elegante</h3>
        </div>
      </div>
      <div className={styles.where}>
        <div className={styles.title}>Fiesta</div>
        <div className={styles.sec}>
          <div className={styles.subtitle}>Día</div>
          <div className={styles.text}>Sábado 29 de abril - 21hs</div>
          <WhereButton title={'AGENDAR'}/>  
        </div>
        <div className={styles.sec}>
          <div className={styles.subtitle}>Lugar</div>
          <div className={styles.text}>Salón</div>
          <WhereButton title={'CONFIRMAR ASISTENCIA'}/> 
        </div>
        <div className={styles.sec}>
          <div className={styles.subtitle}>Dirección</div>
          <div className={styles.text}>dirección</div>
          <WhereButton title={'¿CÓMO LLEGAR?'}/>         
        </div>
      </div>
      <div className={styles.confirm}>
        <div className={styles.guestTitle}>Datos del invitado</div>
        <div className={styles.guest}>
        <div className={styles.guestName}>Sergio Andrés David Maioli</div>
        <div className={styles.guestAmount}>Invitación válida para 2 persona</div>
        </div>
        <WhereButton title={'CONFIRMAR ASISTENCIA'}/>
      </div>
    </div>
  );
};

export default InvitationProtected;
