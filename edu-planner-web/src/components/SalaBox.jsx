import css from './CursoBox.module.css'
import CadastroInput from "./CadastroInput";
import InputMultiplo from "./InputMultiplo";
import InputTextArea from "./InputTextArea";
import InputImagem from "./InputImagem";
import BtnEnviar from "./BtnEnviar";

function SalaBox ({placeholder}){
    return(
        <div className={css.box}>
            <div>
                <h1 className={css.h1}>{placeholder}</h1>
            </div>
            <form>
                <div className={css.formContainer}>
                    <div>
                        <CadastroInput placeholder={'Nome do curso'} type={'text'} name={'nomeCurso'}/>
                        <InputMultiplo label={'Categorias'}></InputMultiplo>
                    </div>
                    <div>
                        <CadastroInput placeholder={'Carga horária por dia'} type={'text'} name={'cargaHoraria'}/>
                        <InputTextArea placeholder={'Descrição'} name={'descricao'}></InputTextArea>
                    </div>
                </div>
                <div className={css.formContainer}>
                    <CadastroInput placeholder={'Faixa Etária'} type={'text'} name={'nomeCurso'}/>
                    <InputImagem placeholder={'Adicionar imagem'} name={'img'}></InputImagem>
                </div>
                <div>
                    <BtnEnviar placeholder='Salvar'></BtnEnviar>
                </div>
            </form>
        </div>
    )
}
export default SalaBox