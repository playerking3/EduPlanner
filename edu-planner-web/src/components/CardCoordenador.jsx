import css from './CardCoordenador.module.css'
import OrdenarPor from "./OrdenarPor";
import {Link} from "react-router-dom";
function CardCoordenador({nome, id, imagem = ''}){
    return (
        <div className={css.usuariolara}>
            <img src={imagem} className={css.fotoperfil}/>
            <label>{nome}</label>
            <div className={css.lapislixo}>
                <Link to={'/editar-pessoa'}><button><img src={'lapis.png'}/></button></Link>
                <button><img src={'lixo.png'}/></button>
            </div>
        </div>
    )
}

export default CardCoordenador