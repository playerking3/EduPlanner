import React,{useState} from "react";
import css from './Cadastro.module.css';
import CadastroInput from "../components/CadastroInput";
import InputImagem from "../components/InputImagem";
import BtnEnviar from "../components/BtnEnviar";
import SideBar from "../components/SideBar";
import ComboBox from "../components/ComboBox";

function Cadastro() {
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [data, setData] = useState("");
    const [email, setEmail] = useState("");
    return(
        <div className={css.container}>
            <SideBar/>

            <div className={css.header}>
                <h2 className={css.h2Cadastro}>Edição de usuário</h2>

                <div className={css.divtudo}>
                    <div className={css.ladoEsquerdo}>
                        <CadastroInput type={'text'} name={'nome'} placeholder={'Nome'}/>
                        <ComboBox name={'funcao'} placeholder={'Função'}/>
                        <InputImagem name={'perfil'} placeholder={'Escolher foto de perfil'} />
                    </div>


                    <div>
                        <CadastroInput type={'text'} name={'cpf'} placeholder={'CPF'} />

                        <CadastroInput type={'date'} name={'nascimento'} placeholder={'Data de nascimento'} />
                        <CadastroInput type={'password'} name={'senha'} placeholder={'Senha'} />
                    </div>
                </div>
                <BtnEnviar placeholder='Salvar'/>
            </div>
        </div>
    )
}


export default Cadastro