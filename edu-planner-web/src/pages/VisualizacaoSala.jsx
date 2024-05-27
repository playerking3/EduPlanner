import styles from './VisualizacaoCurso.module.css'
import React from "react";
import CardCurso from "../components/CardCurso";
import {Link} from "react-router-dom";
import SideBar from "../components/SideBar";


function VisualizacaoCurso() {
    return(
        <div className={styles.container}>
            <SideBar></SideBar>
            <div>
                <div className={styles.botaoTopo}>
                    <Link to={'/cadastro-sala'} className={styles.link}>
                        <div className={styles.botaoc}><p>Nova sala</p> <i className="fa-solid fa-plus fa-xl"></i>
                        </div>
                    </Link>
                </div>
                <div className={styles.mostraCards}>
                    <CardCurso placeholder='Sala de Informática' img='img6' descricao='Sala 23'></CardCurso>
                    <CardCurso placeholder='Cozinha KIDS' img='img5' descricao='Sala 24'></CardCurso>
                    <CardCurso placeholder='Sala de Jogos' img='img4' descricao='Sala 25'></CardCurso>

                </div>
            </div>
        </div>
    );
}

export default VisualizacaoCurso;