import SideBar from "../components/SideBar";
import css from './CadastroCurso.module.css'
import SalaBox from "../components/CursoBox";

function CadastroCurso(){
    return(
        <div className={css.tudo}>
            <SideBar></SideBar>
            <div className={css.conteudo}>
                <SalaBox placeholder={'Cadastro de sala'}></SalaBox>
            </div>
        </div>
    )
}

export default CadastroCurso