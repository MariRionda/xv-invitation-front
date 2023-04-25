"use client";
import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import Loading from "../loading/loading";
import { IoRose } from "react-icons/io5";
import { GiAmpleDress } from "react-icons/gi";
import { FiHeart } from "react-icons/fi";
import styles from "./guestsList.module.css";
import GuestsListPDF from "./list";

const GuestsList = () => {

  let iconsArray = [IoRose, GiAmpleDress, FiHeart];

  const port = process.env.NEXT_PUBLIC_PORT;

  const [attend, setAttend] = useState(["sin datos"]);
  const [notAttend, setNotAttend] = useState(["sin datos"]);
  const [notConfirm, setNotConfirm] = useState(["sin datos"]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % iconsArray.length); // Cambia de icono cada medio segundo
    }, 500);
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    getGuestsAttend();
    getGuestsNotAttend();
    getGuestsNotConfirm();
  }, []);

  const getGuestsAttend = async () => {
    await axios
      .get(`${port}/guest/attend`)
      .then((response) => {
        setAttend(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getGuestsNotAttend = async () => {
    await axios
      .get(`${port}/guest/notAttend`)
      .then((response) => {
        setNotAttend(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getGuestsNotConfirm = async () => {
    await axios
      .get(`${port}/guest/notConfirm`)
      .then((response) => {
        setNotConfirm(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

 

  return (
    <div className={styles.container}>
      {attend[0] !== "sin datos" &&
      notAttend[0] !== "sin datos" &&
      notConfirm[0] !== "sin datos" ? (
        <div className={styles.guestsList}>
          <div className={styles.title}>👨‍👩‍👧‍👦Tus Invitados:</div>
          <div className={styles.list}>
            {attend.length ? (
              <div>
                <div className={styles.subTitle}>✔ Asistirán:</div>
                {attend.map((a, i) => {
                  return (
                    <div className={styles.name} key={i}>
                      {i+1}- {a.lastname} {a.firstname} {a.amount_confirm>1? `- (${a.amount_confirm})`: null}
                    </div>
                  );
                })}
              </div>
            ) : null}
            {notAttend.length ? (
              <div>
                <div className={styles.subTitle}>❌ No asistirán:</div>
                {notAttend.map((a, i) => {
                  return (
                    <div className={styles.name} key={i}>
                      {i+1}- {a.lastname} {a.firstname}
                    </div>
                  );
                })}
              </div>
            ) : null}
            {notConfirm.length ? (
              <div>
                <div className={styles.subTitle}>🤔 No confirmaron:</div>
                {notConfirm.map((a, i) => {
                  return (
                    <div className={styles.name} key={i}>
                      {i+1}- {a.lastname} {a.firstname}
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
          <GuestsListPDF
            attend = {attend}
          ></GuestsListPDF>
        </div>
      ) : (
        <Loading currentIndex={currentIndex} iconsArray={iconsArray} />
      )}
    </div>
  );
};
export default GuestsList;
