import css from './InputTextArea.module.css'
import React from "react";

function InputTextArea({name, placeholder}){
    return (
        <div className={css.container}>
            <label htmlFor={name}>{placeholder} <span className={css.asterisco}>*</span> </label>
            <div className={css.inputGroup}>
                <textarea name={name} className={css.input}/>
            </div>
        </div>
    )
}

export default InputTextArea