'use client'
import { useState } from 'react';
import { useRef } from 'react';
import styles from './navBar.module.css'

export default function NavBar() {

    const [menuOpen, setMenuOpen] = useState(false);
  
    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
      };
    
      const start = useRef(null);
      const where = useRef(null);
      const assistance = useRef(null);

    
      const scrollToSection = (sectionRef) => {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      };
    
      return (
        <nav className={styles.navbar}>
          <button className={styles.menuButton} onClick={handleMenuClick}>
            <span className={styles.menuIcon} />
            <span className={styles.menuIcon} />
            <span className={styles.menuIcon} />
          </button>
          <ul className={`${styles.menu} ${menuOpen ? styles.open : ''}`}>
            <li>
              <a onClick={() => scrollToSection(start)}>Inicio</a>
            </li>
            <li>
              <a onClick={() => scrollToSection(where)}>Donde y cuando</a>
            </li>
            <li>
              <a onClick={() => scrollToSection(assistance)}>Confirmar Asistencia</a>
            </li>
          </ul>
        </nav>
      );
    }