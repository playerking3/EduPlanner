import css from './SideBar.module.css'
import {Link} from "react-router-dom";
function SideBar(){
    return(
        <div className={css.total}>
            <Link to={'/editar-pessoa'} style={{display: 'flex',alignItems: 'center',justifyContent:' center'}}>
                <img src={'fotoperfil.png'} className={css.perfil}/>
            </Link>
            <div className={css.iconGroup}>
                <Link to={'/cursos'}><i className={"fa-solid fa-book fa-xl " + css.icon}></i></Link>
                <Link to={'/dashboard'}><i className={"fa-regular fa-calendar fa-xl " + css.icon}></i></Link>
                <Link to={'/visualizacao-usuario'}><i className={"fa-regular fa-user fa-xl " + css.icon}></i></Link>
                <Link to={'/salas'} style={{fontWeight: 900,color: 'white', marginTop: '1.4em', fontSize: '1.4em'}}><i className={"fa-solid fa-house-user fa-xl" + css.icon}></i></Link>

            </div>
            <div>
                <Link to={'/login'} style={{fontSize: '1.4em'}}><i className={"fa-solid fa-arrow-right-from-bracket "+ css.icon}></i></Link>
            </div>
        </div>
    )
}

export default SideBar