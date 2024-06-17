import styles from './Dashboard.module.css'
import React, {useEffect, useState} from "react";
import CardEvento from "../components/CardEvento";
import SideBar from "../components/SideBar";
import Calendario from "../components/Calendario";

function Dashboard(props) {

    const [listaEventos, setListaEventos] = useState([])

    useEffect(() => {
        async function getApi(props){
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
                    setListaEventos([...acert.lista_turma]);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

        getApi(props)
        console.log(listaEventos)
    }, []);

    function generateRadomColor(){
        const hue = Math.floor(Math.random() * (360 - 0 + 1) ) + 0;
        return 'hsl('+hue+', 100%, 30%)'
    }

    return(
        <div className={styles.body}>
            <SideBar/>
            <div style={{display: 'flex', flexDirection: 'row', marginLeft: '4vw', gap:'2vw', alignItems: 'center'}} className={styles.agrupamento}>
                <Calendario></Calendario>
                <div className={styles.agenda}>
                    {listaEventos.map((item)=>(
                            item[8] === 'ativo' && <CardEvento placeholder={item[3]} horario={'Horário: '+item[9]+' as 17:00'} color={generateRadomColor()} periodo={item[6]}></CardEvento>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Dashboard;