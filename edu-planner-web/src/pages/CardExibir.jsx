import styles from './CardExibir.module.css'
import React from "react";
import {Link} from "react-router-dom";
import Ficha from "../components/Ficha";

function CardExibir({placeholder}) {
    return(
        <div className={styles.card}>
            <div className={styles.fotos}>
            </div>
            <div className={styles.escritas}>
                <h4 className={styles.titulo}>{placeholder}</h4>
                <p className={styles.p}>Turmas inscritas:</p>
                <div className={styles.turmas}>
                    <Ficha placeholder={'Turma 1'}></Ficha>
                    <Ficha placeholder={'Turma 2'}></Ficha>
                    <Ficha placeholder={'Turma 3'}></Ficha>
                    <Ficha placeholder={'Turma 4'}></Ficha>
                </div>
                <div className={styles.infos}>
                    <div>
                        <p className='cargHFaixa'><img src={"./relogio.png"}/> Carga Horária: 40 horas</p>
                    </div>
                    <div className={styles.idade}>
                        <p className='cargHFaixa'><img src={"./crianca.png"}/> Faixa etária: 8 a 12 anos</p>
                    </div>
                    <div className={styles.desc}>
                        Um curso de inglês para iniciantes pode ser uma grande oportunidade de desbloquear conhecimento
                        e iniciar novas habilidades. Falar outra língua pode parecer distante para quem nunca estudou, mas tudo começa com o primeiro passo.
                        A Cultura Inglesa encara esse momento inicial como algo incrível. Por isso, os cursos para iniciantes ajudam pessoas a começarem uma jornada de aprendizado de maneira didática e interessante. É o começo da conquista de um objetivo.
                        Se tem dúvidas sobre aulas de inglês para iniciantes e como funcionam, este conteúdo vai ajudar você.
                    </div>
                </div>
                <div className={styles.botoes}>
                    <div className={styles.link}><div className={styles.botao1}><p>Ver mais</p></div></div>
                    <Link to={'/cursos'} className={styles.link2}><div className={styles.botao2}><p>Gerenciar</p></div></Link>
                </div>
            </div>
        </div>
    );
}

export default CardExibir;