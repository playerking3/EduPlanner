import css from './CardAlunos.module.css'
import OrdenarPor from "./OrdenarPor";

function CardAlunos(){

    return(
        <div>
            <p className={css.identificacao}>Alunos</p>
            <div><OrdenarPor></OrdenarPor></div>
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
                        <button><img src={'lapis.png'}/></button>
                        <button><img src={'lixo.png'}/></button>
                    </div>
                </div>
                <div>
                    <img src={'lado.png'} className={css.setalado} style={{width: 30}}/>
                </div>
            </div>
        </div>
    )
}

export default CardAlunos