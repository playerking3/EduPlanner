import css from './Login.module.css'
import React, {useState} from "react";
import CadastroInput from "../components/CadastroInput";
import BtnEnviar from "../components/BtnEnviar";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {rotaSegurity} from "../functions/rotaSegurity";

function Login(props) {
    const [cpf, setCpf] = useState('')
    const [senha, setSenha] = useState('')

    const navigate = useNavigate();

    useEffect(() => {
        rotaSegurity(props.api, localStorage.getItem('token'),navigate, 'externo')
    }, []);

   async function login () {
        const data = {
            'cpf':cpf,
            'password': senha,
        }

        console.log(data)

        await fetch(props.api + '/login', {
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
                    localStorage.setItem('token', JSON.stringify(acert.token))
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
            <div className={css.bloco}>
                <div className={css.logo}>
                    <img src={"./logo.png"} alt="Logo"/>
                </div>
                <div className={css.form}>
                    <CadastroInput type={'text'} name={'nome'} placeholder={'CPF'} setar={setCpf} valor={cpf}/>
                    <CadastroInput type={'text'} name={'nome'} placeholder={'Senha'} setar={setSenha} valor={senha}/>

                    <BtnEnviar placeholder='Logar' funcao={login}/>
                </div>
            </div>
        </div>
    )
}

export default Login;
