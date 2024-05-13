import css from './CadastroInput.module.css'
function CadastroInput({name, type, placeholder}){
    return(
        <div className={css.container}>
            <label for={name}>{placeholder}</label>
            <div className={css.inputGroup}>
                <input type={type} name={name} className={css.input}/>
            </div>
        </div>
    )
}

export default CadastroInput