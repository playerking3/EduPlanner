import {wait} from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import css from './InputImagem.module.css';

function InputImagem({ name, placeholder, setar, valor }) {
    const [preview, setPreview] = useState(null);

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
    });

    const handleFileInput = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const base = await toBase64(file);
            setar(base);
            setPreview(base);
        }
    };

    return (
        <div className={css.container}>
            <div>
                <p className={css.titulop}>{placeholder} <span className={css.asterisco}>*</span></p>
            </div>
            <div className={css.inputGroup}>
                <div className={css.btnInput}>
                    <input id="img" type="file" name="img" onChange={handleFileInput} style={{ display: 'none' }} />
                    <label htmlFor="img" className={css.input}>
                        {preview ? (
                            <img src={preview} alt="preview" className={css.previewImage} />
                        ) : (
                            <i className="fa-solid fa-arrow-up-from-bracket" style={{fontSize: '2vw', padding: '2vw' }}></i>
                        )}
                    </label>
                </div>
            </div>
        </div>
    );
}

export default InputImagem;