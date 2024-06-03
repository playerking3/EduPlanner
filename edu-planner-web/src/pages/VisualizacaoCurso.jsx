import styles from './VisualizacaoCurso.module.css'
import React, {useState} from "react";
import CardCurso from "../components/CardCurso";
import {Link} from "react-router-dom";
import SideBar from "../components/SideBar";


function VisualizacaoCurso() {
    const [listaCursos, setListaCursos] = useState([{placeholder: 'teste', img: 'img1', descricao: 'testes'}])
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
                    {listaCursos.map((e)=>(
                        <CardCurso placeholder={e.placeholder} img={e.img} descricao={e.descricao}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default VisualizacaoCurso;