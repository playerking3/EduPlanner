import css from './VizualizacaoUsuario.module.css'
import CardCoordenador from "../components/CardCoordenador";
import CardProfessores from "../components/CardProfessores";
import CardAlunos from "../components/CardAlunos";
import SideBar from "../components/SideBar";
import styles from "./VisualizacaoCurso.module.css";
import {Link, useNavigate} from "react-router-dom";
import React, {useEffect} from "react";
import {rotaSegurity} from "../functions/rotaSegurity";

function VizualizacaoUsuario(props){

    const navigate = useNavigate();

    useEffect(() => {
        rotaSegurity(props.api, localStorage.getItem('token'), navigate)
    }, []);

    async function enviar(){


        await fetch(props.api + '/getUsers', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json' // Especifique o tipo de conteúdo como JSON
            },
        })
            .then((resp) => resp.json())
            .then(function(data) {
                let acert = data // saberemos se deu certo
                console.log(acert)
            })
            .catch(function(error) {
                console.log(error);
            })
    }


    return(
        <div className={css.container}>
            <SideBar></SideBar>

            <div className={css.conteinerUsua}>
                <div className={styles.botaoTopo} style={{textDecoration: 'none'}}>
                    <Link to={'/cadastro-pessoa'} className={styles.link}>
                        <div className={css.botaoc}><p style={{fontWeight: 600}}>Novo usuário</p> <i
                            className="fa-solid fa-plus fa-xl"></i>
                        </div>
                    </Link>
                </div>
                <CardCoordenador></CardCoordenador>
                <CardProfessores></CardProfessores>
                <CardAlunos></CardAlunos>
            </div>
        </div>
    )
}

export default VizualizacaoUsuario