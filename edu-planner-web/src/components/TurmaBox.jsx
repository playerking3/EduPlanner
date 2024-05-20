import css from './TurmaBox.module.css'
import CadastroInput from "./CadastroInput";
import InputMultiplo from "./InputMultiplo";
import InputTextArea from "./InputTextArea";
import InputImagem from "./InputImagem";
import BtnEnviar from "./BtnEnviar";
import Periodicidade from "./Periodicidade";
import ComboBoxMultiplo from "./ComboBoxMultiplo";

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
                        <ComboBoxMultiplo name={'salas'} label={'Salas alocadas'} opcoes={['sala1', 'sala2','sala3']}/>
                    </div>
                    <div>
                        <CadastroInput placeholder={'Data: Início'} type={'date'} name={'cargaHoraria'}/>
                        <CadastroInput placeholder={'Duração da aula'} type={'text'} name={'nomeCurso'}/>
                        <CadastroInput placeholder={'Horário de aula'} type={'text'} name={'nomeCurso'}/>
                        <ComboBoxMultiplo name={'professor'} label={'Professor/orientador'} opcoes={['Igor Cacerez', 'Laís Sinatra', 'Bruno Torrezan']}/>

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