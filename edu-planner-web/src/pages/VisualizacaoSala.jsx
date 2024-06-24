import styles from './VisualizacaoCurso.module.css';
import React, { useEffect, useState } from "react";
import CardSala from "../components/CardSala";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";
import { rotaSegurity } from "../functions/rotaSegurity";
import CardCurso from "../components/CardCurso";

function VisualizacaoSala(props) {
    const [listaSalas, setListaSalas] = useState([]);
    const [turmas, setTurmas] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function enviar() {

            const data = {
                'token': JSON.parse(localStorage.getItem('token'))
            }

            let salas = []

            await fetch(props.api + '/getSala', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' // Especifique o tipo de conteúdo como JSON
                },
                body: JSON.stringify(data) // Converta o objeto em uma string JSON
            })
                .then((resp) => resp.json())
                .then(function (data) {
                    let acert = data // saberemos se deu certo
                    salas = [...acert.getSala]
                })
                .catch(function (error) {
                    console.log(error);
                })

            setListaSalas(salas)
            console.log("LISTA SALAS", listaSalas)
        }

        rotaSegurity(props.api, localStorage.getItem('token'), navigate)
        enviar()
    }, []);
    async function handleDelete(id) {
        const data = {
            nome: id,
            token: JSON.parse(localStorage.getItem('token'))
        };

        await fetch(props.api + '/excluirSala', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((resp) => resp.json())
            .then(function (data) {
                let acert = data;
                console.log(acert);
                if (acert.status === 'success') {
                    setListaSalas(prevState => prevState.filter(sala => sala[1] !== id));
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className={styles.container}>
            <SideBar />
            <div>
                <div className={styles.botaoTopo}>
                    <Link to={'/cadastro-sala'} className={styles.link}>
                        <div className={styles.botaoc}><p style={{ fontWeight: 600 }}>Nova sala</p> <i className="fa-solid fa-plus fa-xl"></i></div>
                    </Link>
                </div>
                <div className={styles.mostraCards}>
                    {listaSalas.map((sala) => (
                        <CardSala
                            key={sala[1]}
                            id={sala[1]}
                            placeholder={sala[0]}
                            img={sala[2]}
                            descricao={sala[3]}
                            onDelete={handleDelete}
                            listaTurmas={turmas}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default VisualizacaoSala;
