import css from './TurmaBox.module.css'
import CadastroInput from "./CadastroInput";
import InputMultiplo from "./InputMultiplo";
import InputTextArea from "./InputTextArea";
import InputImagem from "./InputImagem";
import BtnEnviar from "./BtnEnviar";
import Periodicidade from "./Periodicidade";

function TurmaBox (){
    return(
        <div className={css.box}>
            <div>
                <h1 className={css.h1}>Cadastro de turma</h1>
            </div>
            <form>
                <div className={css.formContainer}>
                    <div>
                        <CadastroInput placeholder={'Nome da turma'} type={'text'} name={'nomeCurso'}/>
                        <Periodicidade></Periodicidade>
                        <InputMultiplo label={'Alunos/Participantes'}></InputMultiplo>

                    </div>
                    <div>
                        <CadastroInput placeholder={'Data: Início'} type={'date'} name={'cargaHoraria'}/>
                        <CadastroInput placeholder={'Duração da aula'} type={'text'} name={'nomeCurso'}/>
                        <CadastroInput placeholder={'Horário de aula'} type={'text'} name={'nomeCurso'}/>

                    </div>
                </div>
                <div>
                    <BtnEnviar></BtnEnviar>
                </div>
            </form>
        </div>
    )
}
export default TurmaBox