import css from './SideBar.module.css'
import {Link} from "react-router-dom";
import {useState} from "react";
import styles from "../pages/CardExibir.module.css";
function SideBar(){
    const [fundo, setFundo] = useState(css.fundo)

    function mudarEstilo(){
        setFundo(css.fundo2)
    }
    return(
        <div className={css.total}>
            <Link to={'/editar-pessoa'} style={{display: 'flex',alignItems: 'center',justifyContent:' center'}}>
                <img src={'fotoperfil.png'} className={css.perfil}/>
            </Link>
            <div className={css.iconGroup}>
                <Link to={'/cursos'} className={css.links}><i className={"fa-solid fa-book fa-xl " + css.icon} id={fundo} onClick={mudarEstilo}></i>
                    <div className={css.risco}
                         style={{width: '0.1vw', height: '2vw', background: 'white'}}></div>
                    <p>Cursos</p></Link>
                <Link to={'/dashboard'} className={css.links}><i
                    className={"fa-regular fa-calendar fa-xl " + css.icon}></i>
                    <div className={css.risco}
                         style={{width: '0.1vw', height: '2vw', background: 'white'}}></div>
                    <p>Calendário</p></Link>
                <Link to={'/visualizacao-usuario'} className={css.links}><i
                    className={"fa-regular fa-user fa-xl " + css.icon}></i>
                    <div className={css.risco}
                         style={{width: '0.1vw', height: '2vw', background: 'white'}}></div>
                    <p>Usuários</p></Link>
                <Link to={'/salas'} className={css.links2}
                      style={{fontWeight: 900, color: 'white', marginTop: '1.4em', fontSize: '1.4em'}}><i
                    className={"fa-solid fa-house-user fa-xl" + css.icon}></i>
                    <div className={css.risco}
                         style={{width: '0.1vw', height: '2vw', background: 'white'
                    }}></div>
                    <p style={{marginTop: '0vw', fontSize: '1.3vw'}}>Salas</p></Link>

            </div>
            <div>
                <Link to={'/login'} style={{fontSize: '1.4em'}}><i
                    className={"fa-solid fa-arrow-right-from-bracket " + css.icon}></i></Link>
            </div>
        </div>
    )
}

export default SideBar