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
                <div><img className={css.imgFoto} src='./fotoperfil.png'/></div>
                <div className={css.divIcones}>
                    <img className={css.imgCaderno} src='./cadernoo.png'/>
                    <img className={css.imgCalen} src='./calendario.png'/>
                    <img className={css.imgPerfil} src='./peerfil.png'/>
                </div>
                <div className={css.divSair}>
                    <img className={css.imgSair} src='./sair.png'/>
                </div>

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