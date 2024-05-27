import styles from './Dashboard.module.css'
import React from "react";
import CardEvento from "../components/CardEvento";
import SideBar from "../components/SideBar";

function Dashboard() {
    return(
        <div className={styles.body}>
            <SideBar/>
            <div style={{display: 'flex', flexDirection: 'row', marginLeft: '4vw'}}>
                <div className={styles.calendario}>
                    <div className={styles.topo}>
                        <h2 className={styles.h2}>Novembro 2024</h2>
                        <div className={styles.setas}>
                            <div className={styles.seta4}>
                                <img className={styles.seta2} src='./setaD.png'/>
                            </div>
                            <div className={styles.seta5}>
                                <img className={styles.seta2} src='./setaD.png'/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.linhaA}></div>
                    <div className={styles.diaS}>
                        <h4>Segunda</h4>
                        <h4>Terça</h4>
                        <h4>Quarta</h4>
                        <h4>Quinta</h4>
                        <h4>Sexta</h4>
                        <h4>Sabádo</h4>
                        <h4>Domingo</h4>
                    </div>
                    <div className={styles.diasC}>
                        <div className={styles.semana}>
                            <div className={styles.dia}></div>
                            <div className={styles.linhav}></div>

                            <div className={styles.dia}></div>
                            <div className={styles.linhav}></div>

                            <div className={styles.dia}></div>
                            <div className={styles.linhav}></div>

                            <div className={styles.dia}></div>
                            <div className={styles.linhav}></div>

                            <div className={styles.dia}></div>
                            <div className={styles.linhav}></div>

                            <div className={styles.dia}></div>
                            <div className={styles.linhav}></div>

                            <div className={styles.dia}></div>
                        </div>
                        <div className={styles.linhah}></div>
                        <div className={styles.semana}>
                            <div className={styles.dia}></div>
                            <div className={styles.linhav}></div>

                            <div className={styles.dia}></div>
                            <div className={styles.linhav}></div>

                            <div className={styles.dia}></div>
                            <div className={styles.linhav}></div>

                            <div className={styles.dia}></div>
                            <div className={styles.linhav}></div>

                            <div className={styles.dia}></div>
                            <div className={styles.linhav}></div>

                            <div className={styles.dia}></div>
                            <div className={styles.linhav}></div>

                            <div className={styles.dia}></div>
                        </div>
                        <div className={styles.linhah}></div>

                        <div className={styles.semana}>
                            <div className={styles.dia}></div>
                            <div className={styles.linhav}></div>

                            <div className={styles.dia}></div>
                            <div className={styles.linhav}></div>

                            <div className={styles.dia}></div>
                            <div className={styles.linhav}></div>

                            <div className={styles.dia}></div>
                            <div className={styles.linhav}></div>

                            <div className={styles.dia}></div>
                            <div className={styles.linhav}></div>

                            <div className={styles.dia}></div>
                            <div className={styles.linhav}></div>

                            <div className={styles.dia}></div>
                        </div>
                        <div className={styles.linhah}></div>

                        <div className={styles.semana}>
                            <div className={styles.dia}></div>
                            <div className={styles.linhav}></div>

                            <div className={styles.dia}></div>
                            <div className={styles.linhav}></div>

                            <div className={styles.dia}></div>
                            <div className={styles.linhav}></div>

                            <div className={styles.dia}></div>
                            <div className={styles.linhav}></div>

                            <div className={styles.dia}></div>
                            <div className={styles.linhav}></div>

                            <div className={styles.dia}></div>
                            <div className={styles.linhav}></div>

                            <div className={styles.dia}></div>
                        </div>
                        <div className={styles.linhah}></div>

                        <div className={styles.semana}>
                            <div className={styles.dia}></div>
                            <div className={styles.linhav2}></div>

                            <div className={styles.dia}></div>
                            <div className={styles.linhav2}></div>

                            <div className={styles.dia}></div>
                            <div className={styles.linhav2}></div>

                            <div className={styles.dia}></div>
                            <div className={styles.linhav2}></div>

                            <div className={styles.dia}></div>
                            <div className={styles.linhav2}></div>

                            <div className={styles.dia}></div>
                            <div className={styles.linhav2}></div>

                            <div className={styles.dia}></div>
                        </div>

                    </div>
                </div>
                <div className={styles.agenda}>
                    <CardEvento></CardEvento>
                </div>
            </div>

        </div>
    );
}

export default Dashboard;