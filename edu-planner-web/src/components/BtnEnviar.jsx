import css from './BtnEnviar.module.css'
function BtnEnviar({funcao}){
    return(
        <div>
            <button className={css.botao} onClick={(e)=> {
                e.preventDefault()
                funcao()
            }}>Salvar</button>
        </div>
    )
}
export default BtnEnviar