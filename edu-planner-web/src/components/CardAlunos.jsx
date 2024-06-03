import css from './CardAlunos.module.css'
import OrdenarPor from "./OrdenarPor";
import {Link} from "react-router-dom";

function CardAlunos({nome, id, imagem = ''}){

    return (
        <div className={css.usuarioazul}>
            {imagem === '' ? <img src={'fotoperfil.png'} className={css.fotoperfil}/> :
                <img src={imagem} className={css.fotoperfil}/>}
            <label>{nome}</label>
            <div className={css.lapislixo}>
                <Link to={'/editar-pessoa'}><button><img src={'lapis.png'}/></button></Link>
                <button><img src={'lixo.png'}/></button>
            </div>
        </div>
    )
}

export default CardAlunos