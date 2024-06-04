import css from './CardProfessores.module.css'
import OrdenarPor from "./OrdenarPor";
import {Link} from "react-router-dom";

function CardProfessores({nome, id, imagem = ''}){
    return (
        <div className={css.usuarioroxo}>
            {imagem === '' ? <img src={'fotoperfil.png'} className={css.fotoperfil}/> :
                <img src={"data:image/png;base64," + imagem} className={css.fotoperfil}/>}
            <label>{nome}</label>
            <div className={css.lapislixo}>
                <Link to={'/editar-pessoa'}><button><img src={'lapis.png'}/></button></Link>
                <button><img src={'lixo.png'}/></button>
            </div>
        </div>
    )
}

export default CardProfessores