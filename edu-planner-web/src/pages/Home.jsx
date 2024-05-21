import css from './Home.module.css';
import {Link} from "react-router-dom";
import CardExibir from "./CardExibir";

function Home() {
    return (
        <div style={{fontFamily: 'Montserrat, sans-serif'}}>
        <div className={css.divona}>
            <header className={css.logo}>
                <img src={"./logo.png"} alt="Logo"/>
                </header>

                <div className={css.banner}>
                    <img src={"./banner.png"} alt="Banner"/>
                </div>

                <div className={css.grid}>
                    <div style={{backgroundColor: "#6495ED"}} className={css.azul}>
                        <img src={"./conhecer.png"} style={{width: "70px"}}/>
                        <p style={{color: "white"}}>Conhecer</p>
                    </div>
                    <div style={{backgroundColor: "#FFD700"}} className={css.amarelo}>
                        <img src={"./conviver.png"} style={{width: "80px"}}/>
                        <p style={{color: "white"}}>Conviver</p>
                    </div>
                    <div style={{backgroundColor: "#FF8C00"}} className={css.laranja}>
                        <img src={"./fazer.png"} style={{width: "55px"}}/>
                        <p style={{color: "white"}}>Fazer</p>
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
                <p className="oferecep">Cursos que oferecemos</p>
                <div className='todosCard'>
                    <CardExibir placeholder={'Oficina de bolos'} img='img1' categoria={'Presencial'}></CardExibir>
                    <CardExibir placeholder={'Dramaturgia'} img='img2' categoria={'Presencial'}></CardExibir>
                    <CardExibir placeholder={'Iniciação ao inglês'} img='img3' categoria={'Presencial'}></CardExibir>
                </div>


                <div className={css.gerenciamento}>
                    <div className={css.textos}>
                        <p className={css.texto}> Acompanhe e controle os cursos desenvolvidos em sua escola</p>
                        <p> Uma dashboard preparada para você. </p>
                        <Link to={'/dashboard'}><button className={css.button}> Gerenciar atividades</button></Link>
                    </div>
                    <div>
                        <img src={"./bolas-img.png"} style={{width: "100%"}}/>
                    </div>
                </div>
                <div className={css.footer}>
                    <footer className={css.logos}>
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
