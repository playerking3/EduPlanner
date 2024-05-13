import SideBar from "../components/SideBar";
import css from './CadastroCurso.module.css'
import CursoBox from "../components/CursoBox";

function CadastroCurso(){
    return(
        <div className={css.tudo}>
            <SideBar></SideBar>
            <div className={css.conteudo}>
                <CursoBox></CursoBox>
            </div>
        </div>
    )
}

export default CadastroCurso