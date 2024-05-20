import './Home.css';
import {Link} from "react-router-dom";

function Home() {
    return (
        <div style={{fontFamily: 'Montserrat, sans-serif'}}>
        <div className="divona">
            <header className="logo">
                <img src={"./logo.png"} alt="Logo"/>
                </header>

                <div className="banner">
                    <img src={"./banner.png"} alt="Banner"/>
                </div>

                <div className="grid">
                    <div style={{backgroundColor: "#6495ED"}} className="azul">
                        <img src={"./conhecer.png"} style={{width: "70px"}}/>
                        <p style={{color: "white"}}>Conhecer</p>
                    </div>
                    <div style={{backgroundColor: "#FFD700"}} className="amarelo">
                        <img src={"./conviver.png"} style={{width: "80px"}}/>
                        <p style={{color: "white"}}>Conviver</p>
                    </div>
                    <div style={{backgroundColor: "#FF8C00"}} className="laranja">
                        <img src={"./fazer.png"} style={{width: "55px"}}/>
                        <p style={{color: "white"}}>Fazer</p>
                    </div>
                </div>

                <div className="metodo">
                    <h2>Metodologia</h2>
                    <img src={"./linha.png"} style={{width: "25%"}}/>
                    <p>Nossa metodologia de gestão educacional visa promover o sucesso
                        acadêmico dos alunos e o crescimento das instituições de ensino.
                        Baseada em princípios de qualidade, inovação e colaboração,
                        desenvolvemos estratégias personalizadas para atender às
                        necessidades específicas de cada instituição. Nosso foco está no
                        desenvolvimento integral dos alunos e na excelência educacional,
                        garantindo que todas as iniciativas sejam adaptadas ao contexto
                        local e aos objetivos institucionais.</p>
                </div>


                <div style={{backgroundColor: "white"}} className="ofc">
                    <p className="oferecep">Cursos que oferecemos</p>

                    <div className="cursos">


                        <div className="oficinas">

                            <div className="aulas">
                                <img src={"./bebe.png"} style={{borderRadius: "20px 20px 2px 2px", width: "100%", marginLeft: "-2px"}}/>
                                <p className="p">Oficina de bolos</p>
                                <div className="engloba">
                                    <div className="coisas">

                                        <div>
                                            <button style={{backgroundColor: "#fff", padding: "5px"}} className="presencial">Presencial</button>
                                        </div>

                                        <div>
                                            <button style={{backgroundColor: "#fff", padding: "5px"}} className="presencial">Cursos livres </button>
                                        </div>

                                        <div>
                                            <button style={{backgroundColor: "#fff", padding: "5px"}} className="presencial">Culinária
                                            </button>
                                        </div>
                                    </div>
                                    <p className='cargHFaixa'><img src={"./relogio.png"}/> Carga Horária: 10 horas</p>
                                    <button className="butonn">Mostrar mais</button>
                                    <Link to={'/cursos'}><button className="buton">Gerenciar</button></Link>
                                </div>

                            </div>

                        </div>


                        <div className="oficinas">

                            <div className="aulas">
                                <img src={"./teatro.png"} style={{borderRadius: "20px 20px 2px 2px", width: "100%"}}/>
                                <p className="p">Dramaturgia</p>
                                <div className="engloba">
                                    <div className="coisas">

                                        <div>
                                            <button style={{backgroundColor: "#fff", padding: "5px"}} className="presencial">Presencial
                                            </button>
                                        </div>

                                        <div>
                                            <button style={{backgroundColor: "#fff", padding: "5px"}} className="presencial">Cursos livre </button>
                                        </div>

                                        <div>
                                            <button style={{backgroundColor: "#fff", padding: "5px"}} className="presencial">Teatro
                                            </button>
                                        </div>
                                    </div>
                                    <p className='cargHFaixa'><img src={"./relogio.png"}/> Carga Horária: 40 horas</p>
                                    <button className="butonn">Mostrar mais</button>
                                    <Link to={'/cursos'}><button className="buton">Gerenciar</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="oficinas2">

                        <div>
                            <img src={"./ingles.png"} style={{borderRadius: "20px 2px 2px 20px", width: "90%"}}/>
                        </div>

                        <div className="divao">
                            <p className="p">Iniciação ao inglês</p>

                            <div className="coisas">
                                <div>
                                    <button style={{backgroundColor: "#fff", padding: "5px"}} className="presencial">Presencial</button>
                                </div>

                                <div>
                                    <button style={{backgroundColor: "#fff", padding: "5px"}} className="presencial">Cursos livres
                                    </button>
                                </div>

                                <div>
                                    <button style={{backgroundColor: "#fff", padding: "5px"}} className="presencial">Idiomas</button>
                                </div>
                            </div>
                            <div>
                                <p className='cargHFaixa'><img src={"./relogio.png"}/> Carga Horária: 40 horas</p>
                                <p className='cargHFaixa'><img src={"./crianca.png"}/> Faixa etária: 8 a 12 anos</p>
                                <p className="textao"> Um curso de inglês para iniciantes pode ser uma grande oportunidade de
                                    desbloquear conhecimento
                                    e iniciar novas habilidades. Aprender outro idioma parece distante para quem nunca
                                    estudou,
                                    mas tudo começa com o primeiro passo.
                                    Por isso, os cursos para iniciantes ajudam pessoas a começarem uma jornada de
                                    aprendizado
                                    de maneira didática e interessante. É o começo da conquista de um objetivo.
                                    Se tem dúvidas sobre aulas de inglês para iniciantes e como funcionam, este conteúdo vai te
                                    ajudar.</p>
                                <button className="butonn">Mostrar mais</button>
                                <Link to={'/cursos'}><button className="buton">Gerenciar</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className={"gerenciamento"}>
                        <div>
                            <p className="texto"> Acompanhe e controle os cursos desenvolvidos em sua escola</p>
                            <p> Uma dashboard preparada para você. </p>
                            <button className={"button"}> Gerenciar atividades</button>
                        </div>
                        <div>
                            <img src={"./bolas-img.png"} style={{width: "100%"}}/>
                        </div>
                    </div>
                    <div className="footer">
                        <footer className="logos">
                            <img src={"./logo.png"} style={{width: "20%", marginRight: "30px"}} alt="Logo"/>
                            <img src={"./sesi-senai.png"} style={{width: "40%", marginRight: "30px"}}/>
                            <img src={"./insta.png"} style={{width: "7%"}}/>
                        </footer>
                        <img src={"./footer.png"} style={{width: "100%", marginBottom: "-1vw"}}/>
                    </div>
                </div>
            </div>
        </div>

    )
        ;
}

export default Home;
