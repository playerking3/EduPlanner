import React,{useState} from "react";
import css from './Cadastro.module.css';

function Cadastro() {
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [data, setData] = useState("");
    const [email, setEmail] = useState("");
    return(
        <div className={css.container}>
            <div className={css.menu}>
                    <h2>aaa </h2>
            </div>

            <div className={css.header}>
                <div className={css.divtudo}>
                    <h2 className={css.h2Cadastro}>Cadastrar novo usuário</h2>

                    <div className={css.ptum}>
                        <div className={css.nomeInp}><h3>Nome </h3><h3>*</h3></div>
                        <input type="text" value={nome}
                               onChange={(e) => setNome(e.target.value)} placeholder=" " id="nome"/>
                    </div>
                </div>

            </div>

        </div>
    )
}


export default Cadastro