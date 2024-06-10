import css from './CursoBox.module.css'
import CadastroInput from "./CadastroInput";
import InputMultiplo from "./InputMultiplo";
import InputTextArea from "./InputTextArea";
import InputImagem from "./InputImagem";
import BtnEnviar from "./BtnEnviar";

function SalaBox ({placeholder, nome, setNome, cargaH, setCargaH, enviar, categorias, setCategorias, faixaE, setFaixaE, descricao, setDescricao, imagem, setImagem}){
    return(
        <div className={css.box}>
            <div>
                <h1 className={css.h1}>{placeholder}</h1>
            </div>
            <form>
                <div className={css.formContainer} >
                    <div className={css.todos}>
                        <CadastroInput placeholder={'Nome do curso'} type={'text'} name={'nomeCurso'} setar={setNome} valor={nome}/>
                        <InputMultiplo label={'Categorias'} list={categorias} setList={setCategorias}></InputMultiplo>
                    </div>
                    <div className={css.todos}>
                        <CadastroInput placeholder={'Carga horária por dia'} type={'text'} name={'cargaHoraria'} setar={setCargaH} valor={cargaH}/>
                        <InputTextArea placeholder={'Descrição'} name={'descricao'} setar={setDescricao} valor={descricao}></InputTextArea>
                    </div>
                </div>
                <div className={css.formContainer} >
                    <CadastroInput placeholder={'Faixa Etária'} type={'text'} name={'nomeCurso'} setar={setFaixaE} valor={faixaE}/>
                    <InputImagem placeholder={'Adicionar imagem'} name={'img'} setar={setImagem} valor={imagem}></InputImagem>
                </div>
                <div>
                    <BtnEnviar placeholder='Salvar' funcao={enviar}></BtnEnviar>
                </div>
            </form>
        </div>
    )
}
export default SalaBox