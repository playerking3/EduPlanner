import css from './CardProfessores.module.css'
import OrdenarPor from "./OrdenarPor";

function CardProfessores(){
    return(
        <div className={css.conteinerUsua}>
            <p className={css.identificacao}>Professores</p>
            <div><OrdenarPor></OrdenarPor></div>
            <div className={css.professores}>
                <div className={css.usuarioroxo}>
                    <img src={'fotoperfil.png'} className={css.fotoperfil}/>
                    <label>Luisa Scanbelli dos Santos</label>
                    <div className={css.lapislixo}>
                        <button><img src={'lapis.png'}/></button>
                        <button><img src={'lixo.png'}/></button>
                    </div>
                </div>
                <div className={css.usuarioroxo}>
                    <img src={'fotoperfil.png'} className={css.fotoperfil}/>
                    <label>Luisa Scanbelli dos Santos</label>
                    <div className={css.lapislixo}>
                        <button><img src={'lapis.png'}/></button>
                        <button><img src={'lixo.png'}/></button>
                    </div>
                </div>
                <div className={css.usuarioroxo}>
                    <img src={'fotoperfil.png'} className={css.fotoperfil}/>
                    <label>Luisa Scanbelli dos Santos</label>
                    <div className={css.lapislixo}>
                        <button><img src={'lapis.png'}/></button>
                        <button><img src={'lixo.png'}/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardProfessores