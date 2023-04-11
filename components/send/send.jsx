'use client';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./send.module.css";

const Send = () => {

    const router = useRouter()

    const port = process.env.NEXT_PUBLIC_PORT;

    const [guest, setGuest] = useState({});
    const [allGuests, setAllGuest] = useState(["sin datos"]);
    
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

    useEffect(() => {
        const authenticated = window.sessionStorage.getItem("authenticated");
        if (!authenticated) {
          router.push("/");
        }
        getGuests();
      }, []);
    

    function handleSelect(e) {
        setGuest(allGuests[e.target.value]);
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        console.log(guest)
    }

    return (
        <div>
            {allGuests[0]!=="sin datos"
            ?<div className={styles.container}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.inputWrapper}>
                        <p>Seleccionar invitado:</p>
                        <select
                            id="guest-select"
                            onChange={(e) => handleSelect(e)}
                            >
                            {
                                allGuests?.map((g,i) => (
                                    <option key={g.id} value={i}>{g.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <button type="submit" className={styles.submitButton}>
                        Enviar Invitación
                    </button>
                </form>
            </div>
            :<div className={styles.container}><div className={styles.spinner}/></div>
            }
        </div>
    );
};

export default Send;
