import React, { useState } from "react";
import CadastroInput from "../components/CadastroInput";
import css from './BntSenhaOlho.module.css';

function BntSenhaOlho({ setSenha, senha }) {
    const [mostrarSenha, setMostrarSenha] = useState(false);

    return (
        <div style={{ position: 'relative' }}>
            <div className={css.InputContainer}>
                <CadastroInput
                    type={mostrarSenha ? 'text' : 'password'} name={'senha'} placeholder={'Senha'} setar={setSenha} valor={senha}/>
                <button className={css.MudSenha} onClick={() => {setMostrarSenha(!mostrarSenha);}}>
                    <img
                        className={css.img}
                        src={mostrarSenha ? './OlhoFechado.png' : './OlhoAberto.png'}
                        alt={mostrarSenha ? 'Ocultar Senha' : 'Mostrar Senha'}
                    />
                </button>
            </div>
        </div>
    );
}
export default BntSenhaOlho;