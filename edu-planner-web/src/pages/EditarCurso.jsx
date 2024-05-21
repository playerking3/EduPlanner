import css from "./CadastroCurso.module.css";
import SideBar from "../components/SideBar";
import CursoBox from "../components/CursoBox";

function EditarCurso(){
    return(
        <div className={css.tudo}>
            <SideBar></SideBar>
            <div className={css.conteudo}>
                <CursoBox placeholder='Edição de curso'></CursoBox>
            </div>
        </div>
    )
}
export default EditarCurso