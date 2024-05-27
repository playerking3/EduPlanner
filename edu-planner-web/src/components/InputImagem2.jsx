import css from './InputImagem2.module.css'
import React from "react";
function InputImagem({name, placeholder, setar, valor}){
    return(
        <div className={css.container}>
            <div>
                <p className={css.titulop}>{placeholder} <span className={css.asterisco}>*</span></p>
            </div>
            <div className={css.inputGroup}>
                <div className={css.btnInput}>
                    <label htmlFor={'img'} className={css.input}>
                        <i className="fa-solid fa-arrow-up-from-bracket"></i></label>
                </div>
                <input type={'file'} name={'img'} id={'img'} accept="image/png, image/jpeg" style={{display: "none"}} onChange={(event)=> setar(event.target.value)} value={valor}/>
            </div>
        </div>
    )
}

export default InputImagem