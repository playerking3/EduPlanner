import css from './CadastroInput.module.css'
import React from "react";
function CadastroInput({name, type, placeholder}){
    return(
        <div className={css.container}>
            <label for={name}>{placeholder} <span className={css.asterisco}>*</span> </label>
            <div className={css.inputGroup}>
                <input type={type} name={name} className={css.input}/>
            </div>
        </div>
    )
}

export default CadastroInput