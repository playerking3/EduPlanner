import css from './CardCoordenador.module.css'
import OrdenarPor from "./OrdenarPor";
import {Link} from "react-router-dom";
function CardCoordenador({lista}){
    return (
        <div className={css.conteinerUsua}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <p className={css.identificacao} style={{textAlign: 'left'}}>Coodenadores</p>
                <div><OrdenarPor></OrdenarPor></div>
            </div>

            <div className={css.coordenador}>
                {lista.map((item, index) =>(
                    <ListaAula name={item[0].materia} aula={item} setEstudar={props.setEstudar} type={props.type}></ListaAula>
                ))}
            </div>
        </div>
    )
}

export default CardCoordenador