import css from './InputImagem.module.css'
function InputImagem({name, placeholder}){
    return(
        <div className={css.container}>
            <div>
                <p>{placeholder}</p>
            </div>
            <div className={css.inputGroup}>
                <div className={css.input}>
                    <label htmlFor={name}><i
                        className="fa-solid fa-arrow-up-from-bracket"></i></label>
                </div>
                <input type={'file'} name={name} accept="image/png, image/jpeg" style={{display: "none"}}/>
            </div>
        </div>
    )
}

export default InputImagem