import css from './CardCoordenador.module.css'
function CardCoordenador(){
    return (
        <div className={css.conteinerUsua}>
            <p className={css.identificacao}>Coordenadores</p>
            <div className={css.botao}>
                <button>Novo Usuário <img src={'mais.png'} style={{width: 8}}/></button>
            </div>
            <div className={css.coordenador}>
                <div className={css.usuariolara}>
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
export default CardCoordenador