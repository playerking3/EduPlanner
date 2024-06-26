import css from './TurmaBox.module.css'
import CadastroInput from "./CadastroInput";
import InputMultiplo from "./InputMultiplo";
import InputTextArea from "./InputTextArea";
import InputImagem from "./InputImagem";
import BtnEnviar from "./BtnEnviar";
import Periodicidade from "./Periodicidade";
import ComboBoxMultiplo from "./ComboBoxMultiplo";
import {useEffect, useState} from "react";
import periodicidade from "./Periodicidade";
import {rotaSegurity} from "../functions/rotaSegurity";
import {useNavigate} from "react-router-dom";

function TurmaBox (props){
    const [duracaoCurso, setDuracaoCurso] = useState(40)
    const [nome, setNome] = useState('')
    const [inicio,setInicio] = useState('')
    const [periodicidade, setPeriodicidade] = useState([])
    const [duracaoAula, setDuracaoAula] = useState('')
    const [horario, setHorario] = useState('')
    const [alunos, setAlunos] = useState('')
    const [professores, setProfessores] = useState('')
    const [salas, setSalas] = useState('')
    const [opProfessores, setOpProfessores] = useState([])
    const [opAlunos, setOpAlunos] = useState([])
    const [opSalas, setOpSalas] = useState([])

    const [partesDisplay, setPartesDisplay] = useState(['flex', 'none'])

    const navigate = useNavigate();

    //useEffect(() => {
    //         rotaSegurity(props.api, localStorage.getItem('token'), navigate)
    //         getInfos()
    //     }, []);
    //
    //     async function getInfos (){
    //         const data = {
    //             'token': JSON.parse(localStorage.getItem('token'))
    //         }
    //
    //         await fetch(props.api + '/getInfos', {
    //             method: 'POST',
    //             headers: {
    //                 'Access-Control-Allow-Origin': '*',
    //                 'Content-Type': 'application/json' // Especifique o tipo de conteúdo como JSON
    //             },
    //             body: JSON.stringify(data) // Converta o objeto em uma string JSON
    //         })
    //             .then((resp) => resp.json())
    //             .then(function(data) {
    //                 let acert = data // saberemos se deu certo
    //                 console.log(acert)
    //                 if (acert.status == 'success') {
    //                     setOpAlunos([...acert.infos.alunos])
    //                     setOpProfessores([...acert.infos.professores])
    //                     setOpSalas([...acert.infos.salas])
    //                 }
    //                 else {
    //                     alert(acert.info)
    //                 }
    //
    //             })
    //             .catch(function(error) {
    //                 console.log(error);
    //             })
    //     }

    useEffect(() => {

    }, []);

    async function verificaSalas(){
        const data = {
            'token': JSON.parse(localStorage.getItem('token')),
            'nome': nome,
            'inicio': inicio,
            'lista_dias': periodicidade,
            'horario': horario,
            'horas_dia': duracaoAula,
            'id_curso': props.id
        }
        await fetch(props.api + '/getInfos', {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json' // Especifique o tipo de conteúdo como JSON
            },
            body: JSON.stringify(data) // Converta o objeto em uma string JSON
            })
            .then((resp) => resp.json())
            .then(function(data) {
                let acert = data // saberemos se deu certo
                console.log(acert)
                if (acert.status == 'success') {
                    setOpAlunos([...acert.infos.alunos])
                    setOpProfessores([...acert.infos.professores])
                    setOpSalas([...acert.infos.salas])
                }else {
                    alert(acert.info)
                }
            })
            .catch(function(error) {
                console.log(error);
            })

                setPartesDisplay(['none','flex'])
    }


    async function cadastrarTurma () {
        const data = {
            'nome': nome,
            'inicio': inicio,
            'lista_dias': periodicidade,
            'horas_dia': duracaoAula,
            'horario': horario,
            'id_curso': props.id,
            'id_sala': 1,
            'professores': professores,
            'alunos': alunos,
            'token': JSON.parse(localStorage.getItem('token'))
        }

        console.log(data)

        await fetch(props.api + '/cadastrarTurma', {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json' // Especifique o tipo de conteúdo como JSON
            },
            body: JSON.stringify(data) // Converta o objeto em uma string JSON
        })
            .then((resp) => resp.json())
            .then(function (data) {
                let acert = data // saberemos se deu certo
                console.log(acert)
                if (acert.status == 'success') {
                    navigate('/dashboard')
                } else {
                    alert(acert.info)
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    return(
        <div className={css.box}>
            <div>
                <h1 className={css.h1}>Cadastro de turma</h1>
            </div>
            <form>
                <div className={css.formContainer}style={{display: partesDisplay[0]}}>

                    <div>
                        <div className={css.todos}>
                            <CadastroInput placeholder={'Nome da turma'} type={'text'} name={'nomeCurso'} setar={setNome} valor={nome}/>
                        </div>
                        <div className={css.todos2}>
                            <Periodicidade selectedButtons={periodicidade}
                                           setSelectedButtons={setPeriodicidade}></Periodicidade>
                            <CadastroInput placeholder={'Data: Início'} type={'date'} name={'cargaHoraria'}
                                           valor={inicio} setar={setInicio}/>
                        </div>
                        <div className={css.todos}>
                            <CadastroInput placeholder={'Duração da aula'} type={'text'} name={'nomeCurso'}
                                           setar={setDuracaoAula} valor={duracaoAula}/>
                            <CadastroInput placeholder={'Horário de aula'} type={'text'} name={'nomeCurso'}
                                           setar={setHorario} valor={horario}/>
                        </div>
                    </div>
                    <div>
                        <BtnEnviar placeholder='Continuar' funcao={verificaSalas}></BtnEnviar>
                    </div>
                </div>
                <div className={css.formContainer} style={{display: partesDisplay[1]}}>
                    <div className={css.parte2}>
                        <ComboBoxMultiplo name={'salas'} label={'Salas alocadas'} opcoes={opSalas} list={salas}
                                          setList={setSalas}/>
                        <ComboBoxMultiplo name={'professor'} label={'Professor/orientador'} opcoes={opProfessores}
                                          list={professores} setList={setProfessores}/>
                    </div>
                    <ComboBoxMultiplo name={'alunos'} label={'Alunos/Participantes'} opcoes={opAlunos} list={alunos}
                                      setList={setAlunos}></ComboBoxMultiplo>
                    <div>
                        <BtnEnviar placeholder='Salvar' funcao={cadastrarTurma}></BtnEnviar>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default TurmaBox