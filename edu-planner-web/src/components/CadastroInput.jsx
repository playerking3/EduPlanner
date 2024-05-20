import css from './CadastroInput.module.css'
function CadastroInput({name, type, placeholder, setar, valor}){
    return(
        <div className={css.container}>
            <label for={name}>{placeholder} <span className={css.asterisco}>*</span> </label>
            <div className={css.inputGroup}>
                <input type={type} name={name} className={css.input} onChange={(event)=> setar(event.target.value)} value={valor}/>
            </div>
        </div>
    )
}

export default CadastroInput