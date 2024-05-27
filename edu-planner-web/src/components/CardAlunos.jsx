import css from './CardAlunos.module.css'
import OrdenarPor from "./OrdenarPor";
import {Link} from "react-router-dom";

function CardAlunos(){

    return(
        <div>
            <div style={{display: 'flex',justifyContent: 'space-between'}}>
                <p className={css.identificacao} style={{textAlign: 'left'}}>Alunos</p>
                <div><OrdenarPor></OrdenarPor></div>
            </div>
            <div className={css.alunos}>
                <div className={css.usuarioazul}>
                <img src={'fotoperfil.png'} className={css.fotoperfil}/>
                    <label>Luisa Scanbelli dos Santos</label>
                    <div className={css.lapislixo}>
                        <button><img src={'lapis.png'}/></button>
                        <button><img src={'lixo.png'}/></button>
                    </div>
                </div>
                <div className={css.usuarioazul}>
                    <img src={'fotoperfil.png'} className={css.fotoperfil}/>
                    <label>Luisa Scanbelli dos Santos</label>
                    <div className={css.lapislixo}>
                        <button><img src={'lapis.png'}/></button>
                        <button><img src={'lixo.png'}/></button>
                    </div>
                </div>
                <div className={css.usuarioazul}>
                    <img src={'fotoperfil.png'} className={css.fotoperfil}/>
                    <label>Luisa Scanbelli dos Santos</label>
                    <div className={css.lapislixo}>
                        <button><img src={'lapis.png'}/></button>
                        <button><img src={'lixo.png'}/></button>
                    </div>
                </div>
                <div className={css.usuarioazul}>
                    <img src={'fotoperfil.png'} className={css.fotoperfil}/>
                    <label>Luisa Scanbelli dos Santos</label>
                    <div className={css.lapislixo}>
                        <Link to={'/editar-pessoa'}><button><img src={'lapis.png'}/></button></Link>
                        <button><img src={'lixo.png'}/></button>
                    </div>
                </div>
                <div style={{display: 'flex',alignItems: 'center',width: '5vw',justifyContent: 'center'}}>
                    <img src={'lado.png'} style={{width: 30}}/>
                </div>
            </div>
        </div>
    )
}

export default CardAlunos