import css from "./CardAlunos.module.css";

export default function CardUsuario ({nome, imagem, cargo}) {
    return (
        <>
        {cargo == 'coornedador' &&
        <div className={css.usuariolara}>
            <img src={imagem} className={css.fotoperfil}/>
            <label>{nome}</label>
            <div className={css.lapislixo}>
                <button><img src={'lapis.png'}/></button>
                <button><img src={'lixo.png'}/></button>
            </div>
        </div>
        }

        {cargo == 'professor' &&
            <div className={css.usuarioroxo}>
                <img src={imagem} className={css.fotoperfil}/>
                <label>{nome}</label>
                <div className={css.lapislixo}>
                    <button><img src={'lapis.png'}/></button>
                    <button><img src={'lixo.png'}/></button>
                </div>
            </div>
            }

        {cargo == 'aluno' &&
            <div className={css.usuarioazul}>
                <img src={imagem} className={css.fotoperfil}/>
                <label>{nome}</label>
                <div className={css.lapislixo}>
                    <button><img src={'lapis.png'}/></button>
                    <button><img src={'lixo.png'}/></button>
                </div>
            </div>
        }
        </>
)
}