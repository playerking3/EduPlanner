import css from './OrdenarPor.module.css'

function OrdenarPor(){
    return (
        <div className={css.ordenarPor}>
            Ordenar por <img src={'baixo.png'} className={css.setabaixo}/>
        </div>
    )
}
export default OrdenarPor