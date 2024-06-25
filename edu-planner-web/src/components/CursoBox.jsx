import React, {useEffect, useState} from 'react';
import css from './CursoBox.module.css';
import CadastroInput from "./CadastroInput";
import InputMultiplo from "./InputMultiplo";
import InputTextArea from "./InputTextArea";
import InputImagem from "./InputImagem";
import BtnEnviar from "./BtnEnviar";
import {rotaSegurity} from "../functions/rotaSegurity";
import {useNavigate} from "react-router-dom";

    function CursoBox({placeholder, enviar, nome, setNome, cargaH, setCargaH, faixaE, setFaixaE, categorias, setCategorias, descricao, setDescricao, imagem, setImagem}) {


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
                    <BtnEnviar placeholder='Salvar' funcao={enviar}/>
                </div>
            </form>
        </div>
    );
}

export default CursoBox;
