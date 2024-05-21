import css from './VizualizacaoUsuario.module.css'
import CardCoordenador from "../components/CardCoordenador";
import CardProfessores from "../components/CardProfessores";
import CardAlunos from "../components/CardAlunos";
import SideBar from "../components/SideBar";

function VizualizacaoUsuario(){
    return(
        <div className={css.container}>
            <SideBar></SideBar>

            <div className={css.conteinerUsua}>
                <CardCoordenador></CardCoordenador>
                <CardProfessores></CardProfessores>
                <CardAlunos></CardAlunos>
            </div>
        </div>
    )
}

export default VizualizacaoUsuario