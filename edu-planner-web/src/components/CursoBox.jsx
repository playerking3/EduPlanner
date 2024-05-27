import css from './CursoBox.module.css'
import CadastroInput from "./CadastroInput";
import InputTextArea from "./InputTextArea";
import InputImagem from "./InputImagem";
import BtnEnviar from "./BtnEnviar";

function CursoBox ({placeholder, nome, setNome, cargaH, setCargaH, enviar, categorias, setCategorias, faixaE, setFaixaE, descricao, setDescricao, imagem, setImagem}){
    return(
        <div className={css.box}>
            <div>
                <h1 className={css.h1}>{placeholder}</h1>
            </div>
            <form>
                <div className={css.formContainer}>
                    <div>
                        <CadastroInput placeholder={'Nome da sala'} type={'text'} name={'nomeCurso'}/>
                        <InputImagem placeholder={'Escolher imagem'}></InputImagem>
                        <CadastroInput placeholder={'Ocupação máxima'} type={'text'} name={'nomeCurso'}/>

                    </div>
                    <div>
                        <CadastroInput placeholder={'Número da sala'} type={'text'} name={'cargaHoraria'}/>
                        <InputTextArea placeholder={'Descrição'} name={'descricao'}></InputTextArea>
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