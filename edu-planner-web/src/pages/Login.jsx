import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { rotaSegurity } from "../functions/rotaSegurity";
import CadastroInput from "../components/CadastroInput";
import BtnEnviar from "../components/BtnEnviar";
import BntSenhaOlho from "../components/BntSenhaOlho";
import css from './Login.module.css';

function Login(props) {
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        rotaSegurity(props.api, localStorage.getItem('token'), navigate, 'externo');
    }, [props.api, navigate]);

    async function login() {
        if (senha.length < 8) {
            alert("A senha deve ter no mínimo 8 caracteres.");
            return;
        }

        const data = {
            'cpf': cpf,
            'password': senha,
        };

        console.log(data);

        await fetch(props.api + '/login', {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((resp) => resp.json())
            .then(function(data) {
                let acert = data;
                if (acert.status === 'success') {
                    localStorage.setItem('token', JSON.stringify(acert.token));
                    navigate('/dashboard');
                } else {
                    alert(acert.info);
                }
            })
            .catch(function(error) {
                console.log(error);
            });
    }

        return(

            <div className={css.tudo}>
                <div className={css.bloco}>
                    <div className={css.logo}>
                        <img src={"./logo.png"} alt="Logo" />
                    </div>
                    <div className={css.form}>

                        <CadastroInput placeholder={'CPF'} type={'text'} name={'cpf'} setar={setCpf} valor={cpf}
                        />
                        <BntSenhaOlho setSenha={setSenha} senha={senha} />
                        <BtnEnviar placeholder='Logar' funcao={login} />
                        <button onClick={() => navigate('/forgot-password')} className={css.esqueciSenha}>Esqueci a senha</button>


                    </div>
                </div>
            </div>
        );
}

export default Login;


