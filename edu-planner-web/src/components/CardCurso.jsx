import styles from './CardCurso.module.css';
import React from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

function CardCurso({ placeholder, img, descricao, id, onDelete, listaTurmas }) {
    console.log(listaTurmas)

    const handleDelete = () => {
        Swal.fire({
            title: "Você tem certeza?",
            text: "Você não poderá reverter isso!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#FFDD26",
            cancelButtonColor: "#FF6B00",
            confirmButtonText: "Sim, delete!",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                onDelete(id);
                Swal.fire({
                    title: "Deletado!",
                    text: "Seu arquivo foi deletado.",
                    icon: "success"
                });
            }
        });
    };

    return (
        <div className={styles.card}>
            <div style={{ backgroundImage: "url('data:image/png;base64," + img + "')" }} className={styles.fotos}>
                {img === '' ? <img src={'/foto1.png'} className={styles.fotoDefault} /> :
                    <img src={"data:image/png;base64," + img} className={styles.fotoperfil} />}
            </div>
            <div className={styles.escritas}>
                <h4 className={styles.titulo}>{placeholder}</h4>
                <p className={styles.p}>{descricao}</p>
                <div className={styles.turmas}>
                    {listaTurmas.map((e) => (
                        (e[1] == id) && <div className={styles.fichaTurma}><p className={styles.p2}>{e[3]}</p></div>
                    ))}
                </div>

                <div className={styles.botoes}>
                <Link to={'/'} className={styles.link}><div className={styles.botao1}><p>Mostrar na home</p></div></Link>
                    <Link to={`/cadastro-turma/${id}`} className={styles.link}><div className={styles.botao3}><p>Cadastrar turma</p></div></Link>
                    <Link to={'/editar-curso'} className={styles.link}><div className={styles.botao2}><p>Editar</p></div></Link>
                    <button onClick={handleDelete} className={styles.link}><div className={styles.botao2}><p>Excluir curso</p></div></button>
                </div>
            </div>
        </div>
    );
}

export default CardCurso;
