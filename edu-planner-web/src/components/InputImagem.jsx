import css from './InputImagem.module.css'
import React from "react";
import {wait} from "@testing-library/user-event/dist/utils";
function InputImagem({name, placeholder, setar, valor}){

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
    });

    const handleFileInput = async (e) => {
        console.log('handleFileInput working!')
        console.log(e.target.files[0]);
        const base = await toBase64(e.target.files[0])
        setar(base)
        console.log(base)
    }



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
                <input type="file" onChange={handleFileInput}/>
            </div>
        </div>
    )
}

export default InputImagem