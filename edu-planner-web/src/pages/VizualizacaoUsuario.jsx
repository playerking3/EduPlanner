import css from './VizualizacaoUsuario.module.css'
import CardCoordenador from "../components/CardCoordenador";
import CardProfessores from "../components/CardProfessores";
import CardAlunos from "../components/CardAlunos";
import SideBar from "../components/SideBar";
import styles from "./VisualizacaoCurso.module.css";
import {Link} from "react-router-dom";
import React from "react";
import OrdenarPor from "../components/OrdenarPor";

function VizualizacaoUsuario(){
    return(
        <div className={css.container}>
            <SideBar></SideBar>

            <div className={css.conteinerUsua}>
                <div className={css.botaoTopo}>
                    <Link to={'/cadastro-pessoa'} className={styles.link}>
                        <div className={css.botaoc}><p style={{fontWeight: 600}}>Novo curso</p> <i
                            className="fa-solid fa-plus fa-xl"></i>
                        </div>
                    </Link>
                </div>
                <div>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}} className={css.classe}>
                        <p className={css.identificacao}>Coodenadores</p>
                        <div><OrdenarPor></OrdenarPor></div>
                    </div>
                    <div className={css.turmas}>
                        <CardCoordenador></CardCoordenador>
                        <CardCoordenador></CardCoordenador>
                        <CardCoordenador></CardCoordenador>
                        <CardCoordenador></CardCoordenador>
                        <CardCoordenador></CardCoordenador>
                        <CardCoordenador></CardCoordenador>
                        <CardCoordenador></CardCoordenador>
                    </div>
                </div>
                <div>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}} className={css.classe}>
                        <p className={css.identificacao}>Professores</p>
                        <div><OrdenarPor></OrdenarPor></div>
                    </div>
                    <div className={css.turmas}>
                        <CardProfessores></CardProfessores>
                        <CardProfessores></CardProfessores>
                        <CardProfessores></CardProfessores>
                        <CardProfessores></CardProfessores>
                        <CardProfessores></CardProfessores>
                        <CardProfessores></CardProfessores>
                        <CardProfessores></CardProfessores>
                    </div>
                </div>
                <div>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}} className={css.classe}>
                        <p className={css.identificacao}>Coodenadores</p>
                        <div><OrdenarPor></OrdenarPor></div>
                    </div>
                    <div className={css.turmas}>
                        <CardAlunos></CardAlunos>
                        <CardAlunos></CardAlunos>
                        <CardAlunos></CardAlunos>
                        <CardAlunos></CardAlunos>
                        <CardAlunos></CardAlunos>
                        <CardAlunos></CardAlunos>
                        <CardAlunos></CardAlunos>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default VizualizacaoUsuario