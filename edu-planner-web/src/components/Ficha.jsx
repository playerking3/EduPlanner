import css from './Ficha.module.css'
import React from "react";
function Ficha({name, placeholder}){
    return(
        <div className={css.container}>
            <p className={css.titulop}>{placeholder}</p>
        </div>
    )
}

export default Ficha