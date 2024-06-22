import styles from './CardExibir.module.css'
import React, {useState} from "react";
import {Link} from "react-router-dom";

function CardExibir({placeholder, img, listaCategorias, id, cargaH, faixaE, descricao}) {
    const [card, setCard] = useState(styles.card)
    const [fotos, setFotos] = useState(styles.fotos)
    const [escritas, setEscritas] = useState(styles.escritas)
    const [none, setNone] = useState(styles.none)
    const [none2, setNone2] = useState(styles.none2)
    const [block, setBlock] = useState(styles.block)

    function mudarEstilo(){
        setCard(styles.cardAberto)
        setFotos(styles.imgAberto)
        setEscritas(styles.escritasAberto)
        setNone(styles.noneAberto)
        setNone2(styles.none2Aberto)
        setBlock(styles.blockAberto)
    }
    function mudarEstilo2(){
        setCard(styles.card)
        setFotos(styles.fotos)
        setEscritas(styles.escritas)
        setNone(styles.none)
        setNone2(styles.none2)
        setBlock(styles.block)
    }

    return(
        <div className={card}>
            <div style={{ backgroundImage: "url('data:image/png;base64," + img + "')" }} className={fotos}>

            </div>
            <div className={escritas}>
                <h4 className={styles.titulo}>{placeholder}</h4>
                <div className={styles.turmas}>

                </div>
                <div className={styles.detalhes}>
                    <div className={styles.infos}>
                        <i className="fa-regular fa-clock"></i>
                        <p>Carga Horária: <strong style={{fontWeight:700}}>{cargaH} horas</strong></p>
                    </div>
                    <div className={none2}>
                        <div className={styles.infos}>
                            <i className="fa-solid fa-child-reaching"></i>
                            <p>Faixa Etária: <strong style={{fontWeight: 700}}>{faixaE} anos</strong></p>
                        </div>
                    </div>
                </div>
                <div className={none2}>
                    <p className={styles.desc}>{descricao}</p>
                </div>
                <div className={styles.botoes}>
                    <div className={block}>
                        <div className={styles.link} onClick={mudarEstilo}>
                            <div className={styles.botao1}><p>Veja mais</p></div>
                        </div>
                    </div>
                    <Link to={'/'} className={none} onClick={mudarEstilo2}>
                        <div className={styles.botao1}><p>Veja menos</p></div>
                    </Link>
                    <Link to={'/cursos'} className={styles.link}><div className={styles.botao2}><p>Gerenciar</p></div></Link>
                </div>
            </div>
        </div>
    );
}

export default CardExibir;