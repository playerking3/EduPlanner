import css from './InputImagem.module.css'
function InputImagem({name, placeholder}){
    return(
        <div className={css.container}>
            <div>
                <p>{placeholder}</p>
            </div>
            <div className={css.inputGroup}>
                <div className={css.btnInput}>
                    <label htmlFor={'img'} className={css.input}>
                        <i className="fa-solid fa-arrow-up-from-bracket"></i></label>
                </div>
                <input type={'file'} name={'img'} id={'img'} accept="image/png, image/jpeg" style={{display: "none"}}/>
            </div>
        </div>
    )
}

export default InputImagem