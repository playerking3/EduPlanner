import css from './BtnEnviar.module.css'
function BtnEnviar({funcao}){
    return(
        <div>
            <button className={css.botao} onClick={funcao}>Salvar</button>
        </div>
    )
}
export default BtnEnviar