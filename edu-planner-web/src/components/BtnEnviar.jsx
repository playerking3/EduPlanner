import css from './BtnEnviar.module.css'
function BtnEnviar({funcao, placeholder}){
    return(
        <div>
            <button className={css.botao} onClick={(e)=> {
                e.preventDefault()
                funcao()
            }}>{placeholder}</button>
        </div>
    )
}
export default BtnEnviar