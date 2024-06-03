import css from './OrdenarPor.module.css'

function OrdenarPor(){
    return (
        <div className={css.ordenarPor}>
            <p style={{fontWeight: 600, fontSize:'1.3vw'}}> Ordenar por</p>
            <img src={'baixo.png'} className={css.setabaixo}/>
        </div>
    )
}
export default OrdenarPor