import styles from './VisualizacaoCurso.module.css';
import React, { useEffect, useState } from "react";
import CardCurso from "../components/CardCurso";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";
import { rotaSegurity } from "../functions/rotaSegurity";

function VisualizacaoCurso(props) {
    const [listaCursos, setListaCursos] = useState([]);
    const [turmas, setTurmas] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        async function enviar() {
            console.log("GET CURSOS")
            const data = {
                token: JSON.parse(localStorage.getItem('token'))
            };

            await fetch(props.api + '/getCursos', {
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
                    setListaCursos([...acert.cursos]);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

        async function getTurma(){
            console.log("GET TURMAS")
            const data = {
                token: JSON.parse(localStorage.getItem('token'))
            };

            await fetch(props.api + '/getTurma', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then((resp) => resp.json())
                .then(function (data) {
                    let acert = data;
                    setTurmas([...acert.lista_turma]);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

        rotaSegurity(props.api, localStorage.getItem('token'), navigate);
        enviar();
        getTurma()
    }, []);

    const handleDelete = (id) => {
        setListaCursos(listaCursos.filter(curso => curso.id !== id));
    };

    return (
        <div className={styles.container}>
            <SideBar />
            <div>
                <div className={styles.botaoTopo}>
                    <Link to={'/cadastro-curso'} className={styles.link}>
                        <div className={styles.botaoc}><p style={{ fontWeight: 600 }}>Novo curso</p> <i className="fa-solid fa-plus fa-xl"></i>
                        </div>
                    </Link>
                </div>
                <div className={styles.mostraCards}>
                    {listaCursos.map((curso) => (
                        <CardCurso
                            key={curso[1]}
                            id={curso[1]}
                            placeholder={curso[0]}
                            img={curso[3]}
                            descricao={curso[2]}
                            onDelete={handleDelete}
                            listaTurmas={turmas}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default VisualizacaoCurso;
