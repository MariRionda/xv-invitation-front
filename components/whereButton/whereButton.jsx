'use client'
import styles from './whereButton.module.css';

export default function WhereButton({title}) {
  
  return (
    <div className={styles.button}>
        <p>{title}</p>
    </div>
  );
}
