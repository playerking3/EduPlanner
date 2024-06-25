import styles from './CardSala.module.css';
import React from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

function CardSala({ placeholder, img, descricao, id, onDelete, listaTurmas, api }) {
    console.log(listaTurmas);

    const handleDelete = () => {
        console.log(placeholder)
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
                onDelete(placeholder);
                excluir()
                Swal.fire({
                    title: "Desativado!",
                    text: "Sua sala foi desativada.",
                    icon: "success"
                });
            }
        });
    };

    async function excluir () {
        const data = {
            'id': id,
            'nome': placeholder,
            'token': JSON.parse(localStorage.getItem('token'))
        }

        await fetch(api + '/excluirUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Especifique o tipo de conteúdo como JSON
            },
            body: JSON.stringify(data) // Converta o objeto em uma string JSON
        })
            .then((resp) => resp.json())
            .then(function(data) {
                let acert = data
                console.log(acert)
                if (acert.status == 'success'){
                    window.location.reload(true);
                }
            })
            .catch(function(error) {
                console.log(error);
            })
    }

    return (
        <div className={styles.card}>
            <div style={{ backgroundImage: "url('data:image/png;base64," + img + "')", background: '#d9d9d9' }} className={styles.fotos}>
                {img === '' ? <img src={'/defaultRoomCourse.png'} className={styles.fotoDefault} alt={'imagem'}/> :
                    <img src={"data:image/png;base64," + img} className={styles.fotoperfil} />}
            </div>
            <div className={styles.escritas}>
                <h4 className={styles.titulo}>{placeholder}</h4>
                <div className={styles.turmas}>
                    {listaTurmas.map((e) => (
                        (e[1] === id) && <div className={styles.fichaTurma}><p className={styles.p2}>{e[3]}</p></div>
                    ))}
                </div>

                <div className={styles.botoes}>
                    <Link to={`/editar-sala/${id}`} className={styles.link}>
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
