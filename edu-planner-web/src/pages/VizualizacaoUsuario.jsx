import css from './VizualizacaoUsuario.module.css';
import CardCoordenador from "../components/CardCoordenador";
import CardProfessores from "../components/CardProfessores";
import CardAlunos from "../components/CardAlunos";
import SideBar from "../components/SideBar";
import styles from "./VisualizacaoCurso.module.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import OrdenarPor from "../components/OrdenarPor";
import { rotaSegurity } from "../functions/rotaSegurity";

function VizualizacaoUsuario(props) {
    const [professores, setProfessores] = useState([]);
    const [alunos, setAlunos] = useState([]);
    const [coordenadores, setCoordenadores] = useState([]);
    const [ordemCoordenadores, setOrdemCoordenadores] = useState("");
    const [ordemProfessores, setOrdemProfessores] = useState("");
    const [ordemAlunos, setOrdemAlunos] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        rotaSegurity(props.api, localStorage.getItem('token'), navigate);
        enviar();
    }, []);

    async function enviar() {
        const data = {
            token: JSON.parse(localStorage.getItem('token'))
        };

        await fetch(props.api + '/getUsers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCoordenadores(data.coordenadores);
                setProfessores(data.professores);
                setAlunos(data.alunos);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const ordenarUsuarios = (usuarios, ordem) => {
        if (ordem === "A-Z") {
            return [...usuarios].sort((a, b) => a[0].localeCompare(b[0]));
        } else if (ordem === "Z-A") {
            return [...usuarios].sort((a, b) => b[0].localeCompare(a[0]));
        }
        return usuarios;
    };

    useEffect(() => {
        setCoordenadores(ordenarUsuarios(coordenadores, ordemCoordenadores));
    }, [ordemCoordenadores, coordenadores]);

    useEffect(() => {
        setProfessores(ordenarUsuarios(professores, ordemProfessores));
    }, [ordemProfessores, professores]);

    useEffect(() => {
        setAlunos(ordenarUsuarios(alunos, ordemAlunos));
    }, [ordemAlunos, alunos]);

    return (
        <div className={css.container}>
            <SideBar />
            <div className={css.conteinerUsua}>
                <div className={css.botaoTopo}>
                    <Link to={'/cadastro-pessoa'} className={styles.link}>
                        <div className={css.botaoc}>
                            <p style={{ fontWeight: 600 }}>Novo usuário</p> <i className="fa-solid fa-plus fa-xl"></i>
                        </div>
                    </Link>
                </div>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className={css.classe}>
                        <p className={css.identificacao}>Coordenadores</p>
                        <div><OrdenarPor ordenar={setOrdemCoordenadores} /></div>
                    </div>
                    <div className={css.turmas}>
                        {coordenadores.map((item, index) => (
                            <CardCoordenador key={index} nome={item[0]} id={item[1]} imagem={item[2]} api={props.api} />
                        ))}
                    </div>
                </div>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className={css.classe}>
                        <p className={css.identificacao}>Professores</p>
                        <div><OrdenarPor ordenar={setOrdemProfessores} /></div>
                    </div>
                    <div className={css.turmas}>
                        {professores.map((item, index) => (
                            <CardProfessores key={index} nome={item[0]} id={item[1]} imagem={item[2]} api={props.api} />
                        ))}
                    </div>
                </div>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className={css.classe}>
                        <p className={css.identificacao}>Alunos</p>
                        <div><OrdenarPor ordenar={setOrdemAlunos} /></div>
                    </div>
                    <div className={css.turmas}>
                        {alunos.map((item, index) => (
                            <CardAlunos key={index} nome={item[0]} id={item[1]} imagem={item[2]} api={props.api} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VizualizacaoUsuario;
