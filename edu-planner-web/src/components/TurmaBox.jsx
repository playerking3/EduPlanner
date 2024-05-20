import css from './TurmaBox.module.css'
import CadastroInput from "./CadastroInput";
import InputMultiplo from "./InputMultiplo";
import InputTextArea from "./InputTextArea";
import InputImagem from "./InputImagem";
import BtnEnviar from "./BtnEnviar";
import Periodicidade from "./Periodicidade";
import ComboBoxMultiplo from "./ComboBoxMultiplo";
import {useState} from "react";
import periodicidade from "./Periodicidade";

function TurmaBox (){
    const [duracaoCurso, setDuracaoCurso] = useState(40)
    const [nome, setNome] = useState('')
    const [inicio,setInicio] = useState('')
    const [periodicidade, setPeriodicidade] = useState([])
    const [duracaoAula, setDuracaoAula] = useState('')
    const [horario, setHorario] = useState('')
    const [alunos, setAlunos] = useState('')
    const [professores, setProfessores] = useState('')
    const [salas, setSalas] = useState('')

    function calculaFim(){
        let msPorDia = 24 * 60 * 60 * 1000
        let horasContadas = 0
        let diasPassados = 0
        let dataInicio = new Date(inicio)
        for (let i = new Date().getDay(); horasContadas < duracaoCurso; i++) {
            if (periodicidade.includes(i)){
                horasContadas += parseInt(duracaoAula)
            }
            if (i == 6){
                i = 0
            }
            diasPassados += 1
        }
        let total = new Date(dataInicio.getTime() + (diasPassados * msPorDia))
        console.log(total, diasPassados)
    }

    return(
        <div className={css.box}>
            <div>
                <h1 className={css.h1}>Cadastro de turma</h1>
            </div>
            <form>
                <div className={css.formContainer}>
                    <div>
                        <CadastroInput placeholder={'Nome da turma'} type={'text'} name={'nomeCurso'} setar={setNome} valor={nome}/>
                        <Periodicidade selectedButtons={periodicidade} setSelectedButtons={setPeriodicidade}></Periodicidade>
                        <InputMultiplo label={'Alunos/Participantes'}></InputMultiplo>
                        <ComboBoxMultiplo name={'salas'} label={'Salas alocadas'} opcoes={['sala1', 'sala2','sala3']}/>
                    </div>
                    <div>
                        <CadastroInput placeholder={'Data: Início'} type={'date'} name={'cargaHoraria'} valor={inicio} setar={setInicio}/>
                        <CadastroInput placeholder={'Duração da aula'} type={'text'} name={'nomeCurso'} setar={setDuracaoAula} valor={duracaoAula}/>
                        <CadastroInput placeholder={'Horário de aula'} type={'text'} name={'nomeCurso'}/>
                        <ComboBoxMultiplo name={'professor'} label={'Professor/orientador'} opcoes={['Igor Cacerez', 'Laís Sinatra', 'Bruno Torrezan']}/>

                    </div>
                </div>
                <div>
                    <BtnEnviar funcao={calculaFim}></BtnEnviar>
                </div>
            </form>
        </div>
    )
}
export default TurmaBox