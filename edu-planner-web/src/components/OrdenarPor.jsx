// OrdenarPor.js
import css from './OrdenarPor.module.css'
import React from "react";

function OrdenarPor({ ordenar }) {
    const handleChange = (event) => {
        ordenar(event.target.value);
    };
    return (
        <div className={css.ordenarPor}>
            <p style={{ fontWeight: 600, fontSize: '1.3vw' }}> Ordenar por</p>
            {/*<img src={'baixo.png'} className={css.setabaixo}/> */}
            <select className={css.ordenarr} onChange={handleChange}>
                <option value=""></option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
            </select>
        </div>
    );
}

export default OrdenarPor;
