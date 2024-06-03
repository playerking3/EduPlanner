import css from './CardAlunos.module.css'
import OrdenarPor from "./OrdenarPor";
import {Link} from "react-router-dom";

function CardAlunos(){

    return (
        <div className={css.usuarioazul}>
            <img src={'fotoperfil.png'} className={css.fotoperfil}/>
            <label>Luisa Scanbelli dos Santos</label>
            <div className={css.lapislixo}>
                <Link to={'/editar-pessoa'}>
                    <button><img src={'lapis.png'}/></button>
                </Link>
                <button><img src={'lixo.png'}/></button>
            </div>
        </div>
    )
}

export default CardAlunos