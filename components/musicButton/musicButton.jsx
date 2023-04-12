'use client'
import { useState, useRef, useEffect } from 'react';
import { Howl} from 'howler';
import styles from './musicButton.module.css';

export default function Music() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentPosition, setCurrentPosition] = useState(0); // Estado de la posición actual
  const sound = useRef(null);

  function toggleMusic() {
    setIsPlaying(prev => !prev);

    if (!isPlaying) {
      sound.current = new Howl({
        src: ['/utils/Even If The Sky Is Falling Down - Candelion ft. Cara Dee.mp3'],
        onend: function() {
          setIsPlaying(false);
        },
        onload: function() {
          // Si la canción ya se ha reproducido antes, establecer la posición actual
          if (currentPosition > 0) {
            sound.current.seek(currentPosition);
          }
        }
      });
      sound.current.play();
    } else {
      setCurrentPosition(sound.current.seek()); // Guardar la posición actual antes de pausar
      sound.current.pause();
    }
  }

  // Pausar la música si se sale del componente
  useEffect(() => {
    return () => {
      if (sound.current) {
        sound.current.pause();
      }
    };
  }, []);

  return (
    <div className={isPlaying ? styles.buttonOn : styles.buttonOff } onClick={toggleMusic}>
    </div>
  );
}
