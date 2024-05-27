import css from './CardCoordenador.module.css'
import OrdenarPor from "./OrdenarPor";
import {Link} from "react-router-dom";
function CardCoordenador(){
    return (
        <div className={css.conteinerUsua}>
            <p className={css.identificacao}>Coordenadores</p>
            <div><OrdenarPor></OrdenarPor></div>

            <div className={css.coordenador}>
                <div className={css.usuariolara}>
                    <img src={'fotoperfil.png'} className={css.fotoperfil}/>
                    <label>Luisa Scanbelli dos Santos</label>
                    <div className={css.lapislixo}>
                        <Link to={'/editar-pessoa'}><button><img src={'lapis.png'}/></button></Link>
                        <button><img src={'lixo.png'}/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardCoordenador