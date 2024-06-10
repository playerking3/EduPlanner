import React, {useEffect, useState} from "react";
import SideBar from "../components/SideBar";
import {useNavigate, useParams} from "react-router-dom";
import CursoBox from "../components/SalaBox";
import {rotaSegurity} from "../functions/rotaSegurity";
import css from './CadastroCurso.module.css'
import CadastroBox from "../components/CadastroBox";

function Edicao({api}) {
    const { id } = useParams();
    const [nome, setNome] = useState('')
    const [funcao, setFuncao] = useState('')
    const [foto, setFoto] = useState('')
    const [cpf,setCpf] = useState('')
    const [nascimento, setNascimento] = useState('')
    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        rotaSegurity(   api, localStorage.getItem('token'), navigate)
        getDados()
    }, []);

    async function getDados () {
        const data = {
            'id': id,
            'token': JSON.parse(localStorage.getItem('token'))
        }

        await fetch(api + '/getEditarUsuario', {
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
                    setNome(acert.infos[0][0])
                    setCpf(acert.infos[0][2])
                    setNascimento(acert.infos[0][3])
                    setFuncao(acert.infos[0][4])
                    setEmail(acert.infos[0][5])
                    setSenha(acert.infos[0][6])
                    setFoto(acert.infos[0][7])
                }

            })
            .catch(function(error) {
                console.log(error);
            })
    }

    const navigate = useNavigate();

    useEffect(() => {
        rotaSegurity(api, localStorage.getItem('token'), navigate)
    }, []);

    return (
        <div className={css.tudo}>
            <SideBar></SideBar>
            <div className={css.conteudo}>
                <CadastroBox placeholder='Edição de usuário' nome={nome} setNome={setNome} funcao={funcao}
                          setFuncao={setFuncao} cpf={cpf} setCpf={setCpf} senha={senha} setSenha={setSenha}
                          nascimento={nascimento} setNascimento={setNascimento} foto={foto} setFoto={setFoto}
                          email={email} setEmail={setEmail} ></CadastroBox>
            </div>
        </div>
    )
}


export default Edicao;