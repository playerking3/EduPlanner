import React, {useEffect, useState} from "react";
import css from './Cadastro.module.css';
import CadastroInput from "../components/CadastroInput";
import InputImagem from "../components/InputImagem";
import BtnEnviar from "../components/BtnEnviar";
import SideBar from "../components/SideBar";
import ComboBox from "../components/ComboBox";
import {useParams} from "react-router-dom";


function Cadastro({api}) {
    const { id } = useParams();

    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [data, setData] = useState("");
    const [email, setEmail] = useState("");
    const [imagem, setImagem] = useState('')
    const [cpf, setCpf] = useState('')

    useEffect(() => {
        //console.log(id)
    }, []);

    async function getDados () {
        const data = {
            'id': id,
            'token': JSON.parse(localStorage.getItem('token'))
        }

        await fetch(api + '/getEditarUsuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Especifique o tipo de conteúdo como JSON
            },
            body: JSON.stringify(data) // Converta o objeto em uma string JSON
        })
            .then((resp) => resp.json())
            .then(function(data) {
                let acert = data // saberemos se deu certo
                console.log(acert)

            })
            .catch(function(error) {
                console.log(error);
            })
    }


    return(
        <div className={css.container}>
            <SideBar/>

            <div className={css.header}>
                <h2 className={css.h2Cadastro}>Edição de usuário</h2>

                <div className={css.divtudo}>
                    <div className={css.ladoEsquerdo}>
                        <CadastroInput type={'text'} name={'nome'} placeholder={'Nome'} setar={setNome} valor={nome}/>
                        {/*<ComboBox name={'funcao'} placeholder={'Função'}/>*/}
                        <InputImagem name={'perfil'} placeholder={'Escolher foto de perfil'} setar={setImagem} valor={imagem}/>
                    </div>


                    <div>
                        <CadastroInput type={'text'} name={'cpf'} placeholder={'CPF'} setar={setCpf} valor={cpf}/>

                        <CadastroInput type={'date'} name={'nascimento'} placeholder={'Data de nascimento'} setar={setData} valor={data}/>
                        <CadastroInput type={'password'} name={'senha'} placeholder={'Senha'} setar={setSenha} valor={senha}/>
                    </div>
                </div>
                <BtnEnviar placeholder='Salvar'/>
            </div>
        </div>
    )
}


export default Cadastro