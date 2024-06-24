import styles from './CardCurso.module.css';
import React from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

function CardCurso({ placeholder, img, descricao, id, onDelete, listaTurmas, api }) {
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
                Swal.fire({
                    title: "Deletado!",
                    text: "Seu curso foi desativado",
                    icon: "success"
                });
                onDelete(id);
            }
        });
    };
    const turmasCadastradas = listaTurmas.filter(e => e[1] === id);
    const handleTurmaDelete = (id) => {
        Swal.fire({
            title: "Deseja desativar a turma?",
            text: "Você não poderá reverter isso!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#FFDD26",
            cancelButtonColor: "#FF6B00",
            confirmButtonText: "Sim, desativar!",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Sucesso!",
                    text: "Sua turma foi desativada",
                    icon: "success"
                });
                console.log(id, 'id da turma')
                deleteTurma(id)
            }
        });
    };

    async function deleteTurma(id){
        const data = {
            token: JSON.parse(localStorage.getItem('token')),
            nome: id
        }

        await fetch(api + '/excluirTurma', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((resp) => resp.json())
            .then(function (data) {
                let acert = data;
                console.log(acert)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className={styles.card}>
            <div style={{ backgroundImage: "url('data:image/png;base64," + img + "')" }} className={styles.fotos}>
                {img === '' ? <img src={'/defaultRoomCourse.png'} className={styles.fotoDefault} alt={'imagem'}/> :
                    <img src={"data:image/png;base64," + img} className={styles.fotoperfil} />}
            </div>
            <div className={styles.escritas}>
                <h4 className={styles.titulo}>{placeholder}</h4>
                <div className={styles.turmas}>
                    {turmasCadastradas.length === 0 ? (
                        <div className={styles.fichaTurma2}>
                            <p className={styles.p2}>Nenhuma turma cadastrada</p>
                        </div>
                    ) : (
                        turmasCadastradas.map(e => (
                            <div key={e[0]} className={styles.fichaTurma} onClick={()=>handleTurmaDelete(e[3])}>
                                <p className={styles.p2}>{e[3]}</p>
                            </div>
                        ))
                    )}
                </div>

                <div className={styles.botoes}>
                    <Link to={'/'} className={styles.link}><div className={styles.botao1}><p>Mostrar na home</p></div></Link>
                    <Link to={`/cadastro-turma/${id}`} className={styles.link}><div className={styles.botao3}><p>Cadastrar turma</p></div></Link>
                    <Link to={`/editar-curso/${id}`} className={styles.link}><div className={styles.botao2}><p>Editar</p></div></Link>
                    <button onClick={handleDelete} className={styles.link} disabled={turmasCadastradas.length === 0 ? false : true}><div className={styles.botao2}><p>Desativar curso</p></div></button>
                </div>
            </div>
        </div>
    );
}

export default CardCurso;
