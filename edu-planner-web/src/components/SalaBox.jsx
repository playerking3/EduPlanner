


import css from './CursoBox.module.css'
import CadastroInput from "./CadastroInput";
import InputTextArea from "./InputTextArea";
import InputImagem from "./InputImagem";
import BtnEnviar from "./BtnEnviar";

function CursoBox ({placeholder, nome, setNome, capacidade, setCapacidade, numeroSala, setNumeroSala, descricao, setDescricao, imagem, setImagem, enviar}){
    return(
        <div className={css.box}>
            <div>
                <h1 className={css.h1}>{placeholder}</h1>
            </div>
            <form>
                <div className={css.formContainer}>
                    <div>
                        <CadastroInput placeholder={'Nome da sala'} type={'text'} name={'nomeCurso'} setar={setNome} valor={nome}/>
                        <InputImagem placeholder={'Escolher imagem'} setar={setImagem} valor={imagem}></InputImagem>
                        <CadastroInput placeholder={'Ocupação máxima'} type={'text'} name={'nomeCurso'} setar={setCapacidade} valor={capacidade}/>

                    </div>
                    <div>
                        <CadastroInput placeholder={'Número da sala'} type={'text'} name={'cargaHoraria'} setar={setNumeroSala} valor={numeroSala}/>
                        <InputTextArea placeholder={'Descrição'} name={'descricao'} setar={setDescricao} valor={descricao}></InputTextArea>
                    </div>
                </div>
                <div>
                    <BtnEnviar placeholder='Salvar' funcao={enviar}></BtnEnviar>
                </div>
            </form>
        </div>
    )
}
export default CursoBox