import React from "react";
import css from './RequerimentoSenha.module.css';

function RequerimentoSenha({ onClose }) {
    return (
        <div className={css.card}>
            <div className={css.titulo}>
                <label>Requerimento de Senha</label>
            </div>
            <div className={css.mensagem}>
                <label>A senha deve ter no mínimo 8 caracteres</label>
            </div>
            <div className={css.incompleta}>
                <img src={"./senhaIncompleta.PNG"} alt="Senha Incompleta"/>
            </div>
            <div>
                <button onClick={onClose} className={css.fechar}>OK</button>
            </div>
        </div>
    );
}

export default RequerimentoSenha;
