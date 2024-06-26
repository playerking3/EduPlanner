import React, { useState } from "react";
import CadastroInput from "../components/CadastroInput";
import css from './BntSenhaOlho.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
function BntSenhaOlho({ setSenha, senha }) {
    const [mostrarSenha, setMostrarSenha] = useState(false);

    return (
        <div style={{ position: 'relative' }}>
            <div className={css.InputContainer}>
                <CadastroInput
                    type={mostrarSenha ? 'text' : 'password'} name={'senha'} placeholder={'Senha'} setar={setSenha} valor={senha}/>
                <button className={css.MudSenha} onClick={() => setMostrarSenha(!mostrarSenha)}>
                    <FontAwesomeIcon icon={mostrarSenha ?  faEye : faEyeSlash }/>
                </button>
            </div>
        </div>
    );
}

export default BntSenhaOlho;