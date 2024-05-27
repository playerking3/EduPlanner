import css from './SideBar.module.css'
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {rotaSegurity} from "../functions/rotaSegurity";
function SideBar(){

    const [api, setApi] = useState('http://127.0.0.1:5000')
    const navigate = useNavigate();

    useEffect(() => {
        rotaSegurity(api, localStorage.getItem('token'), navigate)
    }, []);

    function sair () {
        localStorage.removeItem('token')
        navigate('/login')
    }

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
<<<<<<< HEAD
                <Link to={'/login'} onClick={() => sair()}><i className={"fa-solid fa-arrow-right-from-bracket "+ css.icon}></i></Link>
=======
                <Link to={'/login'} style={{fontSize: '1.4em'}}><i className={"fa-solid fa-arrow-right-from-bracket "+ css.icon}></i></Link>
>>>>>>> 82094d8c237fc76f2443df34ddd895aa59a5f3c8
            </div>
        </div>
    )
}

export default SideBar