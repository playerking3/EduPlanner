import React, { useState } from "react";
import CadastroInput from "../components/CadastroInput";
import css from './BntSenhaOlho.module.css';

function BntSenhaOlho({ setSenha, senha }) {
    const [mostrarSenha, setMostrarSenha] = useState(false);

    return (
        <div style={{ position: 'relative' }}>
            <CadastroInput
                type={mostrarSenha ? 'text' : 'password'}
                name={'senha'}
                placeholder={'Senha'}
                setar={setSenha}
                valor={senha}
            />
            <button
                className={css.MudSenha}
                onClick={(e) => {
                    e.preventDefault(); // Previne a ação padrão de submissão do formulário
                    setMostrarSenha(!mostrarSenha);
                }}
            >
                <img
                    className={'img'}
                    src={mostrarSenha ? 'OlhoFechado.png' : 'OlhoAberto.png'}
                    alt={mostrarSenha ? 'Ocultar Senha' : 'Mostrar Senha'}
                />
            </button>
        </div>
    );
}

export default BntSenhaOlho;

