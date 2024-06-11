import css from './Home.module.css';
import {Link, useNavigate} from "react-router-dom";
import CardExibir from "./CardExibir";
import CardCurso from "../components/CardCurso";
import React, {useEffect, useState} from "react";
import {rotaSegurity} from "../functions/rotaSegurity";

function Home(props) {
    const [listaCursos, setListaCursos] = useState([{ id: 1, placeholder: 'teste', img: 'defaultRoomCourse', descricao: 'testes' }]);
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
    return (
        <div style={{fontFamily: 'Montserrat, sans-serif', overflowX:'hidden'}}>
            <div className={css.divona}>
                <header className={css.logo}>
                    <img src={"./logo.png"} alt="Logo"/>
                </header>

                <div className={css.banner}>
                    <img src={"./banner.png"} alt="Banner"/>
                </div>

                <div className={css.grid}>
                    <div style={{backgroundColor: "#6495ED"}} className={css.azul}>
                        <img src={"./conhecer.png"} className={css.conhecer}/>
                        <p className={css.letraGrid}>Conhecer</p>
                    </div>
                    <div style={{backgroundColor: "#FFD700"}} className={css.amarelo}>
                        <img src={"./conviver.png"} className={css.conviver} />
                        <p className={css.letraGrid}>Conviver</p>
                    </div>
                    <div style={{backgroundColor: "#FF8C00"}} className={css.laranja}>
                        <img src={"./fazer.png"} className={css.fazer}/>
                        <p className={css.letraGrid}>Fazer</p>
                    </div>
                </div>

                <div className={css.metodo}>
                    <div className={css.metodologia}>
                        <h2 className={css.h1metodo}>Metodologia</h2>
                        <img src={"./linha.png"} style={{width: "20%"}}/>
                        <p className={css.metodologiap}>Nossa metodologia de gestão educacional visa promover o sucesso
                            acadêmico dos alunos e o crescimento das instituições de ensino.
                            Baseada em princípios de qualidade, inovação e colaboração,
                            desenvolvemos estratégias personalizadas para atender às
                            necessidades específicas de cada instituição. Nosso foco está no
                            desenvolvimento integral dos alunos e na excelência educacional,
                            garantindo que todas as iniciativas sejam adaptadas ao contexto
                            local e aos objetivos institucionais.</p>
                    </div>
                </div>


                <div style={{backgroundColor: "white"}} className="ofc">
                    <p className="oferecep" style={{textAlign: 'center',fontSize: '2.5vw',fontWeight: 600, padding: '4vw'}}>Cursos que oferecemos</p>
                    <div className='todosCard' style={{display: 'flex',alignItems: 'center',alignContent: 'center',flexWrap: 'wrap',gap: '3vw', justifyContent: 'space-evenly'}}>
                        <CardExibir placeholder={'Oficina de bolos'} img='img1' categoria={'Presencial'} descricao={'Um curso de inglês para iniciantes pode ser uma grande oportunidade de\n' +
                            '                        desbloquear conhecimento e iniciar novas habilidades. Falar outra língua pode parecer distante para quem nunca estudou, mas tudo começa com o primeiro passo.\n' +
                            '                    A Cultura Inglesa encara esse momento inicial como algo incrível. Por isso, os cursos para iniciantes ajudam pessoas a começarem uma jornada de aprendizado de maneira didática e interessante. É o começo da conquista de um objetivo.\n' +
                            '                    Se tem dúvidas sobre aulas de inglês para iniciantes e como funcionam, este conteúdo vai ajudar você. '} ></CardExibir>
                        <CardExibir placeholder={'Dramaturgia'} img='img2' categoria={'Presencial'} descricao={'Um curso de inglês para iniciantes pode ser uma grande oportunidade de\n' +
                            '                        desbloquear conhecimento e iniciar novas habilidades. Falar outra língua pode parecer distante para quem nunca estudou, mas tudo começa com o primeiro passo.\n' +
                            '                    A Cultura Inglesa encara esse momento inicial como algo incrível. Por isso, os cursos para iniciantes ajudam pessoas a começarem uma jornada de aprendizado de maneira didática e interessante. É o começo da conquista de um objetivo.\n' +
                            '                    Se tem dúvidas sobre aulas de inglês para iniciantes e como funcionam, este conteúdo vai ajudar você. '}></CardExibir>
                        <CardExibir placeholder={'Iniciação ao inglês'} img='img3' categoria={'Presencial'} descricao={'Um curso de inglês para iniciantes pode ser uma grande oportunidade de\n' +
                            '                        desbloquear conhecimento e iniciar novas habilidades. Falar outra língua pode parecer distante para quem nunca estudou, mas tudo começa com o primeiro passo.\n' +
                            '                    A Cultura Inglesa encara esse momento inicial como algo incrível. Por isso, os cursos para iniciantes ajudam pessoas a começarem uma jornada de aprendizado de maneira didática e interessante. É o começo da conquista de um objetivo.\n' +
                            '                    Se tem dúvidas sobre aulas de inglês para iniciantes e como funcionam, este conteúdo vai ajudar você. '}></CardExibir>
                        <CardExibir placeholder={'Iniciação ao Espanhol'} img='img7' categoria={'Presencial'} descricao={'Um curso de inglês para iniciantes pode ser uma grande oportunidade de\n' +
                            '                        desbloquear conhecimento e iniciar novas habilidades. Falar outra língua pode parecer distante para quem nunca estudou, mas tudo começa com o primeiro passo.\n' +
                            '                    A Cultura Inglesa encara esse momento inicial como algo incrível. Por isso, os cursos para iniciantes ajudam pessoas a começarem uma jornada de aprendizado de maneira didática e interessante. É o começo da conquista de um objetivo.\n' +
                            '                    Se tem dúvidas sobre aulas de inglês para iniciantes e como funcionam, este conteúdo vai ajudar você. '}></CardExibir>
                        {listaCursos.map((curso) => (
                            <CardExibir
                                key={curso.id}
                                id={curso.id}
                                placeholder={curso.placeholder}
                                img={curso.img}
                                descricao={curso.descricao}
                            />
                        ))}
                    </div>

                    <div className={css.tudos}>
                        <div className={css.gerenciamento}>
                            <div className={css.textos}>
                                <p className={css.texto}> Acompanhe e controle os cursos desenvolvidos em sua escola</p>
                                <p className={css.textin}> Uma dashboard preparada para você. </p>
                                <Link to={'/dashboard'}>
                                    <button className={css.button}> Gerenciar atividades</button>
                                </Link>
                            </div>
                            <img src={"./bolas-img.png"} className={css.bolas}/>
                        </div>
                    </div>
                    <div className={css.footer}>
                        <footer className={css.logos}>
                            <img className={css.img1} src={"./logo.png"} style={{width: "20%", marginRight: "30px"}} alt="Logo"/>
                            <img className={css.img2} src={"./sesi-senai.png"} style={{width: "40%", marginRight: "30px"}}/>
                            <img className={css.img3} src={"./insta.png"} style={{width: "7%"}}/>
                        </footer>
                        <img className={css.fundo} src={"./footer.png"} style={{width: "100%", marginBottom: "-1vw"}}/>
                    </div>
                </div>
            </div>
        </div>

    )
        ;
}

export default Home;
