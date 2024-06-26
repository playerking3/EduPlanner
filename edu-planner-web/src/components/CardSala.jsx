import styles from './CardSala.module.css';
import React from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

function CardSala({ placeholder, img, descricao, id, onDelete, listaTurmas }) {
    console.log(listaTurmas);

    const handleDelete = () => {
        Swal.fire({
            title: "Você tem certeza?",
            text: "Você não poderá reverter isso!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#FFDD26",
            cancelButtonColor: "#FF6B00",
            confirmButtonText: "Sim, desativar!",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                onDelete(id);
                Swal.fire({
                    title: "Desativado!",
                    text: "Sua sala foi desativada.",
                    icon: "success"
                });
            }
        });
    };

    return (
        <div className={styles.card}>
            <div style={{ backgroundImage: "url('data:image/png;base64," + img + "')", background: '#d9d9d9' }} className={styles.fotos}>
                {img === '' ? <img src={'/defaultRoomCourse.png'} className={styles.fotoDefault} alt={'imagem'}/> :
                    <img src={"data:image/png;base64," + img} className={styles.fotoperfil} />}
            </div>
            <div className={styles.escritas}>
                <h4 className={styles.titulo}>{placeholder}</h4>
                <p className={styles.p}>Sala {descricao}</p>
                <div className={styles.turmas}>
                    {listaTurmas.map((e) => (
                        (e[1] === id) && <div className={styles.fichaTurma}><p className={styles.p2}>{e[3]}</p></div>
                    ))}
                </div>

                <div className={styles.botoes}>
                    <Link to={`/cadastro-turma/${id}`} className={styles.link}>
                        <div className={styles.botao3}><p>Cadastrar turma</p></div>
                    </Link>
                    <Link to={'/editar-sala'} className={styles.link}>
                        <div className={styles.botao2}><p>Editar</p></div>
                    </Link>
                    <button onClick={handleDelete} className={styles.link}>
                        <div className={styles.botao2}><p>Desativar sala</p></div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CardSala;
