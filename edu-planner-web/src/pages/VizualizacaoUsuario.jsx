import css from './VizualizacaoUsuario.module.css'
import CardCoordenador from "../components/CardCoordenador";
import CardProfessores from "../components/CardProfessores";
import CardAlunos from "../components/CardAlunos";
import SideBar from "../components/SideBar";
import styles from "./VisualizacaoCurso.module.css";
import {Link} from "react-router-dom";
import React from "react";

function VizualizacaoUsuario(){
    return(
        <div className={css.container}>
            <SideBar></SideBar>

            <div className={css.conteinerUsua}>
                <div className={styles.botaoTopo} style={{textDecoration: 'none'}}>
                    <Link to={'/cadastro-pessoa'} className={styles.link}>
                        <div className={css.botaoc}><p style={{fontWeight: 600}}>Novo usuário</p> <i
                            className="fa-solid fa-plus fa-xl"></i>
                        </div>
                    </Link>
                </div>
                <CardCoordenador></CardCoordenador>
                <CardProfessores></CardProfessores>
                <CardAlunos></CardAlunos>
            </div>
        </div>
    )
}

export default VizualizacaoUsuario