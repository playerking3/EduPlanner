import styles from './CardCurso.module.css'
import React from "react";
import {Link} from "react-router-dom";
import css from "./CardCoordenador.module.css";

function CardCurso({placeholder, img, descricao}) {
    return(
        <div className={styles.card}>
            <div style={{ backgroundImage: "data:image/png;base64," + img}} className={styles.fotos}>
                {img === '' ? <img src={'/foto1.png'} className={styles.fotoDefault}/> :
                    <img src={"data:image/png;base64," + img} className={styles.fotoperfil}/>}
            </div>
            <div className={styles.escritas}>
                <h4 className={styles.titulo}>{placeholder}</h4>
                <p className={styles.p}>{descricao}</p>
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