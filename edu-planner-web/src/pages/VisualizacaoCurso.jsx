import styles from './VisualizacaoCurso.module.css';
import React, { useEffect, useState } from "react";
import CardCurso from "../components/CardCurso";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";
import { rotaSegurity } from "../functions/rotaSegurity";

function VisualizacaoCurso(props) {
    const [listaCursos, setListaCursos] = useState([{ id: 1, placeholder: 'teste', img: 'img1', descricao: 'testes' }]);
    const navigate = useNavigate();

    useEffect(() => {
        rotaSegurity(props.api, localStorage.getItem('token'), navigate);
        enviar();
    }, []);

    async function enviar() {
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
                            key={curso.id}
                            id={curso.id}
                            placeholder={curso.placeholder}
                            img={curso.img}
                            descricao={curso.descricao}
                            onDelete={handleDelete}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default VisualizacaoCurso;
