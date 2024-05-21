import css from './Login.module.css'
import React, {useState} from "react";
import CadastroInput from "../components/CadastroInput";
import BtnEnviar from "../components/BtnEnviar";

function Login() {
    const [cpf, setCpf] = useState('')
    const [senha, setSenha] = useState('')
    function login () {
        
    }

    return(
        <div className={css.tudo}>
            <div className={css.bloco}>
                <div className={css.logo}>
                    <img src={"./logo.png"} alt="Logo"/>
                </div>
                <div className={css.form}>
                    <CadastroInput type={'text'} name={'nome'} placeholder={'CPF'}/>
                    <CadastroInput type={'text'} name={'nome'} placeholder={'Senha'}/>

                    <BtnEnviar placeholder='Logar'/>
                </div>
            </div>
        </div>
    )
}

export default Login;
