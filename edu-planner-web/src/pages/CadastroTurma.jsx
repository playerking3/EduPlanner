import SideBar from "../components/SideBar";
import styles from './CadastroCurso.module.css'
import TurmaBox from "../components/TurmaBox";
import {useState} from "react";
import {useParams} from "react-router-dom";

function CadastroTurma({api}){
    const { id } = useParams();
    return(
        <div className={styles.tudo}>
            <SideBar></SideBar>
            <div className={styles.conteudo}>
                <TurmaBox api={api} id={id}></TurmaBox>
            </div>
        </div>
    )
}

export default CadastroTurma