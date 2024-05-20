import css from "./ComboBox.module.css";
import React from "react";

function ComboBox({name, placeholder, opcoes, setar}) {
    return (
        <div className={css.container}>
            <label htmlFor={name}>{placeholder}</label>
            <div className={css.inputGroup}>
                <select className={css.select} id={name} onChange={(element)=>setar(element.target.value)}>
                    {opcoes.map((item)=>
                        <option value={item}>{item}</option>
                    )}
                </select>
            </div>
        </div>

    )
}

export default ComboBox