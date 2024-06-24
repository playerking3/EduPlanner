import css from './SideBar.module.css'
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {rotaSegurity} from "../functions/rotaSegurity";
function SideBar(){

    const [api, setApi] = useState('http://127.0.0.1:5000')

    useEffect(() => {
        rotaSegurity(api, localStorage.getItem('token'), navigate)
    }, []);

    function sair () {
        localStorage.removeItem('token')
        navigate('/login')
    }
    const [apareceM, setApareceM] = useState(css.apareceM)
    const [desapareceM, setDesapareceM] = useState(css.desapareceM)

    function mudarEstilo(){
        setDesapareceM(css.apareceA)
        setApareceM(css.desapareceA)
    }

    const navigate = useNavigate();
    const fotoPerfil = localStorage.getItem('fotoPerfil');


    return(
        <div style={{display: 'flex'}}>
            <div className={apareceM}>
                <div className={css.total2}>
                    <i onClick={mudarEstilo} className="fa-solid fa-bars"
                       style={{fontSize: '6vw', color: 'white', marginTop: '6vw'}}></i>
                </div>
            </div>
            <div className={desapareceM}>
                <div className={css.total}>
                    <div></div>
                    <div className={css.iconGroup}>
                        <Link to={'/'} className={css.links} style={{marginLeft:'-.1vw'}}><i
                            className={"fa-solid fa-house fa-xl " + css.icon}></i>
                            <div className={css.risco}
                                 style={{width: '0.1vw', height: '2vw', background: 'white'}}></div>
                            <p>Home</p></Link>
                        <Link to={'/cursos'} className={css.links}><i
                            className={"fa-solid fa-book fa-xl " + css.icon}></i>
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
                        <Link to={'/salas'} className={css.links}><i className={"fa-solid fa-house-chimney-user fa-xl " + css.icon}></i>
                        <div className={css.risco}
                                 style={{
                                     width: '0.1vw', height: '2vw', background: 'white'
                                 }}></div>
                            <p>Salas</p></Link>

                    </div>
                    <div>
                        <Link to={'/login'} style={{fontSize: '1.4em'}} onClick={() => sair()}><i
                            className={"fa-solid fa-arrow-right-from-bracket " + css.icon}></i></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar