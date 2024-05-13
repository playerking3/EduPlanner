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
                <h2 className={css.h2Cadastro}>Cadastro de usuário</h2>

                <div className={css.divtudo}>
                    <div className={css.ladoEsquerdo}>
                        <div className={css.ptum}>
                            <div className={css.nomeInp}><h3>Nome </h3><h3 className={css.asterisco}>*</h3></div>
                            <input type="text" value={nome}
                                   onChange={(e) => setNome(e.target.value)} placeholder=" " id="nome"/>
                        </div>
                        <div className={css.ptdois}>
                            <div className={css.nomeInp}><h3>Função </h3><h3 className={css.asterisco}>*</h3></div>
                            <select className={css.select} id="cars">
                                <option value="audi"></option>
                                <option value="volvo">Coordenador</option>
                                <option value="saab">Professor</option>
                                <option value="mercedes">Aluno</option>

                            </select>

                        </div>
                        <div className={css.pttres}>
                            <div className={css.nomeInp}><h3>Escolher foto de perfil </h3></div>
                            <button className={css.bttBaixar}><img className={css.imgBaixar} src='./baixar.png'/>
                            </button>
                        </div>
                    </div>


                    <div>
                        <div className={css.ptquatro}>
                            <div className={css.nomeInp}><h3>CPF </h3><h3 className={css.asterisco}>*</h3></div>
                            <input type="text" value={nome}
                                   onChange={(e) => setNome(e.target.value)} placeholder=" " id="nome"/>
                        </div>
                        <div className={css.ptcinco}>
                            <div className={css.nomeInp}><h3>Data de nascimento </h3><h3 className={css.asterisco}>*</h3></div>
                            <input type="text" value={nome}
                                   onChange={(e) => setNome(e.target.value)} placeholder=" " id="nome"/>
                        </div>
                        <div className={css.ptseis}>
                            <div className={css.nomeInp}><h3>E-mail </h3><h3 className={css.asterisco}>*</h3></div>
                            <input type="text" value={nome}
                                   onChange={(e) => setNome(e.target.value)} placeholder=" " id="nome"/>
                        </div>
                        <div className={css.ptsete}>
                            <div className={css.nomeInp}><h3>Senha </h3><h3 className={css.asterisco}>*</h3></div>
                            <input type="text" value={nome}
                                   onChange={(e) => setNome(e.target.value)} placeholder=" " id="nome"/>
                        </div>
                    </div>
                </div>
                <button className={css.bttSalvar}>Salvar</button>
            </div>
        </div>
    )
}


export default Cadastro