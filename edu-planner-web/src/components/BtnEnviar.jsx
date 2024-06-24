import css from './BtnEnviar.module.css'
function BtnEnviar({funcao, placeholder, type = "button"}){
    return(
        <div>
            <button type={type} className={css.botao} onClick={(e)=> {
                funcao(e)
            }}>{placeholder}</button>
        </div>
    )
}
export default BtnEnviar