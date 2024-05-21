import React, {useEffect, useState} from "react";
import css from './Cadastro.module.css';
import CadastroInput from "../components/CadastroInput";
import InputImagem from "../components/InputImagem";
import BtnEnviar from "../components/BtnEnviar";
import SideBar from "../components/SideBar";
import ComboBox from "../components/ComboBox";
import {useNavigate} from "react-router-dom";
import {rotaSegurity} from "../functions/rotaSegurity";

function Cadastro(props) {
    const [nome, setNome] = useState('')
    const [funcao, setFuncao] = useState('')
    const [foto, setFoto] = useState('')
    const [cpf,setCpf] = useState('')
    const [nascimento, setNascimento] = useState('')
    const [senha, setSenha] = useState('')

    const navigate = useNavigate();

    useEffect(() => {
        rotaSegurity(props.api, localStorage.getItem('token'), navigate)
    }, []);

    async function enviar(){
        console.log(nome, cpf, nascimento, senha, funcao)

        const data = {
            'nome':nome,
            'cpf':cpf,
            'data_nascimento':nascimento,
            'password': senha,
            'cargo': funcao,
            'foto': foto
        }

        await fetch(props.api + '/cadastro', {
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
        <div className={css.container}>
            <SideBar/>
            <div className={css.header}>
                <h2 className={css.h2Cadastro}>Cadastro de usuário</h2>

                <div className={css.divtudo}>
                    <div className={css.ladoEsquerdo}>
                        <CadastroInput type={'text'} name={'nome'} placeholder={'Nome'} valor={nome} setar={setNome}/>
                        <ComboBox name={'funcao'} placeholder={'Função'} opcoes={['Aluno', 'Professor', 'Coordenador']} setar={setFuncao}/>
                        <InputImagem name={'perfil'} placeholder={'Escolher foto de perfil'} />
                    </div>


                    <div>
                        <CadastroInput type={'text'} name={'cpf'} placeholder={'CPF'} setar={setCpf} valor={cpf}/>
                        <CadastroInput type={'date'} name={'nascimento'} placeholder={'Data de nascimento'} setar={setNascimento} valor={nascimento}/>
                        <CadastroInput type={'password'} name={'senha'} placeholder={'Senha'} valor={senha} setar={setSenha}/>
                    </div>
                </div>
                <BtnEnviar funcao={enviar}/>
            </div>
        </div>
    )
}


export default Cadastro