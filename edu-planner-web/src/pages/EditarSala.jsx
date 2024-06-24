import SideBar from "../components/SideBar";
import css from './CadastroCurso.module.css'
import SalaBox from "../components/SalaBox";
import {useEffect, useState} from "react";
import {rotaSegurity} from "../functions/rotaSegurity";
import {useNavigate, useParams} from "react-router-dom";

function EditaSala({api}){
    const { id } = useParams();

    const [nome, setNome] = useState('')
    const [capacidade, setCapacidade] = useState(0)
    const [numeroSala, setNumeroSala] = useState(0)
    const [descricao, setDescricao] = useState('')
    const [imagem, setImagem] = useState('')

    const navigate = useNavigate();

    useEffect(() => {
        rotaSegurity(api, localStorage.getItem('token'), navigate)
        getDados()
    }, []);

    async function getDados () {
        const data = {
            'id': id,
            'token': JSON.parse(localStorage.getItem('token'))
        }

        await fetch(api + '/getSalaIdEdit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Especifique o tipo de conteúdo como JSON
            },
            body: JSON.stringify(data) // Converta o objeto em uma string JSON
        })
            .then((resp) => resp.json())
            .then(function(data) {
                let acert = data // saberemos se deu certo
                console.log(acert)
                if (acert.status === 'success') {
                    setNome(acert.getSala[0])
                    setNumeroSala(acert.getSala[2])
                    setCapacidade(acert.getSala[3])
                    setDescricao(acert.getSala[4])
                    setImagem(acert.getSala[5])
                }

            })
            .catch(function(error) {
                console.log(error);
            })
    }

    async function enviar(){
        const data = {
            'id': id,
            'nome': nome,
            'capacidade': capacidade,
            'numero_sala': numeroSala,
            'descricao': descricao,
            'imagem': imagem,
            'token': JSON.parse(localStorage.getItem('token'))
        }

        console.log(data)

        await fetch(api + '/editSala', {
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
                if (acert.status == 'success') {
                    navigate('/dashboard')
                }
                else {
                    alert(acert.info)
                }
            })
            .catch(function(error) {
                console.log(error);
            })
    }

    return(
        <div className={css.tudo}>
            <SideBar></SideBar>
            <div className={css.conteudo}>
                <SalaBox placeholder={'Editar sala'} nome={nome} setNome={setNome} capacidade={capacidade} setCapacidade={setCapacidade} numeroSala={numeroSala} setNumeroSala={setNumeroSala} descricao={descricao} setDescricao={setDescricao} imagem={imagem} setImagem={setImagem} enviar={enviar}></SalaBox>
            </div>
        </div>
    )
}

export default EditaSala