import React, {useEffect, useState} from 'react';
import css from './CursoBox.module.css';
import CadastroInput from "./CadastroInput";
import InputMultiplo from "./InputMultiplo";
import InputTextArea from "./InputTextArea";
import InputImagem from "./InputImagem";
import BtnEnviar from "./BtnEnviar";
import {rotaSegurity} from "../functions/rotaSegurity";
import {useNavigate} from "react-router-dom";

    function CursoBox({placeholder,id, api}) {
        const navigate = useNavigate();

        const [nome, setNome] = useState('')
        const [cargaH, setCargaH] = useState('')
        const [faixaE, setFaixaE] = useState('')
        const [categorias, setCategorias] = useState('')
        const [descricao, setDescricao] = useState('')
        const [imagem, setImagem] = useState('')

        useEffect(() => {
            rotaSegurity(api, localStorage.getItem('token'), navigate)
            getDados()
        }, []);

    async function getDados () {
        const data = {
            'id': id,
            'token': JSON.parse(localStorage.getItem('token'))
        }

        await fetch(api + '/getCursoId', {
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
                if (acert.status === 'success') {
                    setNome(acert.infos[0])
                    setCargaH(acert.infos[2])
                    setFaixaE(acert.infos[3])
                    //setCategorias(acert.infos[4])
                    setDescricao(acert.infos[5])
                    setImagem(acert.infos[6])
                }

            })
            .catch(function(error) {
                console.log(error);
            })
    }

        async function editDados(){
            const data = {
                'id': id,
                'nome': nome,
                'cargaH':cargaH,
                'faixaE': faixaE,
                'categorias':categorias,
                'descricao': descricao,
                'imagem': imagem,
                'token': JSON.parse(localStorage.getItem('token'))
            }
            await fetch(api + '/editCurso', {

                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json' // Especifique o tipo de conteúdo como JSON
                },
                body: JSON.stringify(data) // Converta o objeto em uma string JSON
            })
                .then((resp) => resp.json())
                .then(function(data) {
                    let acert = data // saberemos se deu certo
                    console.log(acert)
                    if (acert.status == 'success'){
                        navigate('/dashboard')
                    }
                })
                .catch(function(error) {
                    console.log(error);
                })
        }

    return (
        <div className={css.box}>
            <div>
                <h1 className={css.h1}>{placeholder}</h1>
            </div>
            <form>
                <div className={css.formContainer}>
                    <div className={css.todos}>
                        <CadastroInput placeholder={'Nome do curso'} type={'text'} name={'nomeCurso'} setar={setNome} valor={nome} />
                        <InputMultiplo label={'Categorias'} list={categorias} setList={setCategorias} />
                        <InputImagem placeholder={'Adicionar imagem'} name={'img'} setar={setImagem} valor={imagem} />

                    </div>
                    <div className={css.todos}>
                        <CadastroInput placeholder={'Carga horária (em horas)'} type={'number'} name={'cargaHoraria'} setar={setCargaH} valor={cargaH} />
                        <InputTextArea placeholder={'Descrição'} name={'descricao'} setar={setDescricao} valor={descricao} />
                        <CadastroInput placeholder={'Faixa Etária'} type={'text'} name={'faixaEtaria'} setar={setFaixaE} valor={faixaE} />

                    </div>
                </div>
                <div className={css.formContainer}>
                </div>

                <div>
                    <BtnEnviar placeholder='Salvar' funcao={editDados}/>
                </div>
            </form>
        </div>
    );
}

export default CursoBox;
