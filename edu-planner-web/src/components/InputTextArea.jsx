import css from './InputTextArea.module.css'
import React from "react";

function InputTextArea({name, placeholder, setar, valor}){
    return (
        <div className={css.container}>
            <label htmlFor={name}>{placeholder} <span className={css.asterisco}>*</span> </label>
            <div className={css.inputGroup}>
                <textarea name={name} className={css.input} onChange={(event)=> setar(event.target.value)} value={valor}/>
            </div>
        </div>
    )
}

export default InputTextArea