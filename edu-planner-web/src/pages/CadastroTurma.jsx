import SideBar from "../components/SideBar";
import styles from './CadastroCurso.module.css'
import TurmaBox from "../components/TurmaBox";
import {useState} from "react";

function CadastroTurma(){
    return(
        <div className={styles.tudo}>
            <SideBar></SideBar>
            <div className={styles.conteudo}>
                <TurmaBox></TurmaBox>
            </div>
        </div>
    )
}

export default CadastroTurma