import css from "./ComboBox.module.css";
import React from "react";

function ComboBox({name, placeholder, opcoes}) {
    return (
        <div className={css.container}>
            <label htmlFor={name}>{placeholder}</label>
            <div className={css.inputGroup}>
                <select className={css.select} id="cars">
                    {opcoes.map((item)=>
                        <option value={item}>{item}</option>
                    )}
                </select>
            </div>
        </div>

    )
}

export default ComboBox