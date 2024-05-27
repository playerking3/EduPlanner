import styles from './Dashboard.module.css'
import React from "react";
import CardEvento from "../components/CardEvento";
import SideBar from "../components/SideBar";
import Calendario from "../components/Calendario";

function Dashboard() {
    return(
        <div className={styles.body}>
            <SideBar/>
            <div style={{display: 'flex', flexDirection: 'row', marginLeft: '4vw', gap:'2vw'}}>
                <Calendario></Calendario>
                <div className={styles.agenda}>
                    <CardEvento></CardEvento>
                </div>
            </div>

        </div>
    );
}

export default Dashboard;