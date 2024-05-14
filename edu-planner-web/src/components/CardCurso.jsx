import styles from './CardCurso.module.css'
import React from "react";
import {Link} from "react-router-dom";

function CardCurso() {
    return(
        <div className={styles.card}>
            <div className={styles.fotos}>

            </div>
            <div className={styles.escritas}>
                <h4 className={styles.titulo}>Oficina de Bolos</h4>
                <p className={styles.p}>Turmas inscritas:</p>
                <div className={styles.turmas}>
                    <div className={styles.fichaTurma}><p className={styles.p2}>Turma 1</p></div>
                    <div className={styles.fichaTurma}><p className={styles.p2}>Turma 1</p></div>
                    <div className={styles.fichaTurma}><p className={styles.p2}>Turma 1</p></div>

                </div>
                <div className={styles.botoes}>
                    <Link to={'/'} className={styles.link}><div className={styles.botao1}><p>Mostrar na home</p></div></Link>
                    <Link to={'/editar-curso'} className={styles.link}><div className={styles.botao2}><p>Editar curso</p></div></Link>
                    <Link to={'/cadastro-turma'} className={styles.link}><div className={styles.botao3}><p>Cadastrar turma</p></div></Link>
                </div>
            </div>
        </div>
    );
}

export default CardCurso;