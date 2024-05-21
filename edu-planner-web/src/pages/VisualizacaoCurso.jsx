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
                    <Link to={'/cadastro-curso'} className={styles.link}>
                        <div className={styles.botaoc}><p style={{fontWeight: 600}}>Novo curso</p> <i className="fa-solid fa-plus fa-xl"></i>
                        </div>
                    </Link>
                </div>
                <div className={styles.mostraCards}>
                    <CardCurso placeholder='Oficina de bolos' img='img1' descricao='Turmas inscritas:'></CardCurso>
                    <CardCurso placeholder='Oficina de bolos' img='img2' descricao='Turmas inscritas:'></CardCurso>
                    <CardCurso placeholder='Oficina de bolos' img='img3' descricao='Turmas inscritas:'></CardCurso>

                </div>
            </div>
        </div>
    );
}

export default VisualizacaoCurso;