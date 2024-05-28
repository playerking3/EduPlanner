import styles from './Dashboard.module.css'
import React from "react";
import CardEvento from "../components/CardEvento";
import SideBar from "../components/SideBar";
import Calendario from "../components/Calendario";

function Dashboard() {
    return(
        <div className={styles.body}>
            <SideBar/>
            <div style={{display: 'flex', flexDirection: 'row', marginLeft: '4vw', gap:'2vw', alignItems: 'center'}} className={styles.agrupamento}>
                <Calendario></Calendario>
                <div className={styles.agenda}>
                    <CardEvento placeholder={'Curso de vendas'} horario={'Horário: 15:00 as 17:00'} color={'#FFDD26'}></CardEvento>
                    <CardEvento placeholder={'Curso de Calçado'} horario={'Horário: 12:00 as 17:00'} color={'orange'}></CardEvento>
                </div>
            </div>

        </div>
    );
}

export default Dashboard;