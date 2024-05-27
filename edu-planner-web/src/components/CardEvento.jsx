import styles from './CardEvento.module.css'
import React from "react";
import Periodicidade2 from "./Periodicidade2";

function CardEvento() {
    return(
        <div className={styles.card}>
            <h3 className={styles.texto}>Curso de vendas</h3>
            <p className={styles.texto}>Horário: 15:00 as 17:00</p>
            <Periodicidade2></Periodicidade2>
        </div>
    );
}

export default CardEvento;