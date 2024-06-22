import SideBar from "../components/SideBar";
import css from './CadastroCurso.module.css';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { rotaSegurity } from "../functions/rotaSegurity";
import CadastroBox from "../components/CadastroBox";
import Swal from 'sweetalert2';

function Cadastro(props) {
    const [nome, setNome] = useState('');
    const [funcao, setFuncao] = useState('');
    const [foto, setFoto] = useState('');
    const [cpf, setCpf] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        rotaSegurity(props.api, localStorage.getItem('token'), navigate);
    }, []);

    async function enviar(dados) {
        try {
            const response = await fetch(props.api + '/cadastro', {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dados),
            });

            if (!response.ok) {
                throw new Error('Erro ao cadastrar usuário');
            }

            const responseData = await response.json();
            if (responseData.status === 'success') {
                navigate('/dashboard');
            } else {
                alert(responseData.info);
            }
        } catch (error) {
            console.error('Erro:', error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Algo está errado!",
            });
        }
    }

    return (
        <div className={css.tudo}>
            <SideBar />
            <div className={css.conteudo}>
                <CadastroBox
                    placeholder='Cadastro de usuário'
                    nome={nome} setNome={setNome}
                    funcao={funcao} setFuncao={setFuncao}
                    cpf={cpf} setCpf={setCpf}
                    senha={senha} setSenha={setSenha}
                    nascimento={nascimento} setNascimento={setNascimento}
                    foto={foto} setFoto={setFoto}
                    email={email} setEmail={setEmail}
                    enviar={enviar}
                />
            </div>
        </div>
    );
}

export default Cadastro;
