import SideBar from "../components/SideBar";
import css from './CadastroCurso.module.css'
import CadastroBox from "../components/CadastroBox";

function Cadastro(){
    return(
        <div className={css.tudo}>
            <SideBar></SideBar>
            <div className={css.conteudo}>
                <CadastroBox placeholder='Cadastro de usuário'></CadastroBox>
            </div>
        </div>
    )
}

export default Cadastro