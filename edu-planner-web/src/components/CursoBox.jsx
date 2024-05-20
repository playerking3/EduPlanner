import css from './CursoBox.module.css'
import CadastroInput from "./CadastroInput";
import InputMultiplo from "./InputMultiplo";
import InputTextArea from "./InputTextArea";
import InputImagem from "./InputImagem";
import BtnEnviar from "./BtnEnviar";

function CursoBox (){
    return(
        <div className={css.box}>
            <div>
                <h1 className={css.h1}>Cadastro de curso</h1>
            </div>
            <form>
                <div className={css.formContainer}>
                    <div>
                        <CadastroInput placeholder={'Nome do curso'} type={'text'} name={'nomeCurso'}/>
                        <InputMultiplo label={'Categorias'}></InputMultiplo>
                        <CadastroInput placeholder={'Faixa Etária'} type={'text'} name={'nomeCurso'}/>
                    </div>
                    <div>
                        <CadastroInput placeholder={'Carga horária por dia'} type={'text'} name={'cargaHoraria'}/>
                        <InputTextArea placeholder={'Descrição'} name={'descricao'}></InputTextArea>
                        <InputImagem placeholder={'Adicionar imagem'} name={'img'}></InputImagem>
                    </div>
                </div>
                <div>
                    <BtnEnviar></BtnEnviar>
                </div>
            </form>
        </div>
    )
}
export default CursoBox