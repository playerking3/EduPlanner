import styles from './CardEvento.module.css'
import React from "react";
import Periodicidade2 from "./Periodicidade2";

function CardEvento({placeholder, horario, color}) {
    return(
        <div className={styles.card} style={{background:color}}>
            <h3 className={styles.texto}>{placeholder}</h3>
            <p className={styles.texto}>{horario}</p>
            <Periodicidade2></Periodicidade2>
        </div>
    );
}

export default CardEvento;