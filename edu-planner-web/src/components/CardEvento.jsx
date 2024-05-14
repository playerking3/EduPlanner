import styles from './CardEvento.module.css'
import React from "react";

function CardEvento() {
    return(
        <div className={styles.card}>
            <h3 className={styles.texto}>Curso de vendas</h3>
            <p className={styles.texto}>Horário: 15:00 as 17:00</p>
            <div className={styles.dias}>
                <p className={styles.dia}>S</p>
                <p className={styles.dia}>T</p>
                <p className={styles.dia}>Q</p>
                <p className={styles.dia}>Q</p>
                <p className={styles.dia}>S</p>
                <p className={styles.dia}>S</p>
                <p className={styles.dia}>D</p>
            </div>
        </div>
    );
}

export default CardEvento;