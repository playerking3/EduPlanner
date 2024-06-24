import css from "./CadastroCurso.module.css";
import SideBar from "../components/SideBar";
import CursoBox from "../components/CursoBox";
import {useParams} from "react-router-dom";

function EditarCurso({api}){
    const { id } = useParams();

    return(
        <div className={css.tudo}>
            <SideBar></SideBar>
            <div className={css.conteudo}>
                <CursoBox placeholder='Edição de curso' id={id} api={api}></CursoBox>
            </div>
        </div>
    )
}
export default EditarCurso