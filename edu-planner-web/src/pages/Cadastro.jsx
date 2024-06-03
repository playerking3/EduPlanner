import SideBar from "../components/SideBar";
import css from './CadastroCurso.module.css'
import CadastroBox from "../components/CadastroBox";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {rotaSegurity} from "../functions/rotaSegurity";

function Cadastro(props) {
    const [nome, setNome] = useState('')
    const [funcao, setFuncao] = useState('')
    const [foto, setFoto] = useState('')
    const [cpf,setCpf] = useState('')
    const [nascimento, setNascimento] = useState('')
    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')

    const navigate = useNavigate();

    useEffect(() => {
        rotaSegurity(props.api, localStorage.getItem('token'), navigate)
    }, []);

    async function enviar(){
        // const formData = new FormData();
        //
        // // Adiciona os campos ao FormData
        // formData.append('nome', nome);
        // formData.append('cpf', cpf);
        // formData.append('data_nascimento', nascimento);
        // formData.append('password', senha);
        // formData.append('cargo', funcao);
        // formData.append('email', email);
        //
        // console.log("FOTO", foto)
        //
        // // Adiciona a foto ao FormData
        // if (foto) {
        //     formData.append('foto', foto);
        // }

        const data = {
            'nome':nome,
            'cpf':cpf,
            'data_nascimento':nascimento,
            'password': senha,
            'cargo': funcao,
            'foto': foto,
            'email': email
        }

        await fetch(props.api + '/cadastro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Especifique o tipo de conteúdo como JSON
            },
            body: JSON.stringify(data) // Converta o objeto em uma string JSON
        })
            .then((resp) => resp.json())
            .then(function(data) {
                let acert = data // saberemos se deu certo
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
                <CadastroBox placeholder='Cadastro de usuário' nome={nome} setNome={setNome} funcao={funcao} setFuncao={setFuncao} cpf={cpf} setCpf={setCpf} senha={senha} setSenha={setSenha} nascimento={nascimento} setNascimento={setNascimento} foto={foto} setFoto={setFoto} email={email} setEmail={setEmail} enviar={enviar}></CadastroBox>
            </div>
        </div>
    )
}

export default Cadastro;