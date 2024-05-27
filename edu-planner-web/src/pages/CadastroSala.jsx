import SideBar from "../components/SideBar";
import css from './CadastroCurso.module.css'
import SalaBox from "../components/SalaBox";
import {useEffect, useState} from "react";
import {rotaSegurity} from "../functions/rotaSegurity";
import {useNavigate} from "react-router-dom";

function CadastroCurso(props){
    const [nome, setNome] = useState('')
    const [capacidade, setCapacidade] = useState(0)
    const [numeroSala, setNumeroSala] = useState(0)
    const [descricao, setDescricao] = useState('')
    const [imagem, setImagem] = useState('')
    
    const navigate = useNavigate();

    useEffect(() => {
        rotaSegurity(props.api, localStorage.getItem('token'), navigate)
    }, []);

    async function enviar(){
        const data = {
            'nome': nome,
            'capacidade': capacidade,
            'numero_sala': numeroSala,
            'descricao': descricao,
            'imagem': imagem,
            'token': JSON.parse(localStorage.getItem('token'))
        }

        await fetch(props.api + '/cadastrarSala', {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json' // Especifique o tipo de conteúdo como JSON
            },
            body: JSON.stringify(data) // Converta o objeto em uma string JSON
        })
            .then((resp) => resp.json())
            .then(function(data) {
                let acert = data // saberemos se deu certo
                console.log(acert)
            })
            .catch(function(error) {
                console.log(error);
            })
    }

    return(
        <div className={css.tudo}>
            <SideBar></SideBar>
            <div className={css.conteudo}>
                <SalaBox placeholder={'Cadastro de sala'} nome={nome} setNome={setNome} capacidade={capacidade} setCapacidade={setCapacidade} numeroSala={numeroSala} setNumeroSala={setNumeroSala} descricao={descricao} setDescricao={setDescricao} imagem={imagem} setImagem={setImagem} enviar={enviar}></SalaBox>
            </div>
        </div>
    )
}

export default CadastroCurso