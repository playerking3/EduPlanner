import css from './CardAlunos.module.css'
import OrdenarPor from "./OrdenarPor";
import {Link, useNavigate} from "react-router-dom";

function CardAlunos({nome, id, imagem = '', api}){
    const navigate = useNavigate();
    async function excluir () {
        const data = {
            'id': id,
            'token': JSON.parse(localStorage.getItem('token'))
        }

        await fetch(api + '/excluirUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Especifique o tipo de conteúdo como JSON
            },
            body: JSON.stringify(data) // Converta o objeto em uma string JSON
        })
            .then((resp) => resp.json())
            .then(function(data) {
                let acert = data
                console.log(acert)
                if (acert.status == 'success'){
                    window.location.reload(true);
                }
            })
            .catch(function(error) {
                console.log(error);
            })
    }

    return (
        <div className={css.usuarioazul}>
            {imagem === '' ? <img src={'fotoperfil.png'} className={css.fotoperfil}/> :
                <img src={"data:image/png;base64," + imagem} className={css.fotoperfil}/>}
            <label>{nome}</label>
            <div className={css.lapislixo}>
                <button onClick={() => navigate(`/editar-pessoa/${id}`)}><img src={'lapis.png'}/></button>
                <button onClick={() => excluir()}><img src={'lixo.png'}/></button>
            </div>
        </div>
    )
}

export default CardAlunos