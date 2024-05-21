import css from './CadastroBox.module.css'
import CadastroInput from "./CadastroInput";
import InputMultiplo from "./InputMultiplo";
import InputTextArea from "./InputTextArea";
import InputImagem2 from "./InputImagem2";
import BtnEnviar from "./BtnEnviar";
import ComboBox from "./ComboBox";

function CadastroBox ({placeholder}){
    return(
        <div className={css.box}>
            <div>
                <h1 className={css.h1}>{placeholder}</h1>
            </div>
            <form>
                <div className={css.formContainer}>
                    <div>
                        <CadastroInput placeholder={'Nome'} type={'text'} name={'nomeUser'}/>
                        <CadastroInput placeholder={'Função'} type={'text'} name={'nomeUser'}/>
                        <InputImagem2 placeholder={'Adicionar imagem'} name={'img'}></InputImagem2>

                    </div>
                    <div>
                        <CadastroInput placeholder={'CPF'} type={'text'} name={'cpf'}/>
                        <CadastroInput placeholder={'Data de nascimento'} type={'text'} name={'nascimento'}/>
                        <CadastroInput placeholder={'Email'} type={'text'} name={'email'}/>
                        <CadastroInput placeholder={'Senha'} type={'text'} name={'senha'}/>

                    </div>
                </div>
                <div>
                    <BtnEnviar placeholder='Salvar'></BtnEnviar>
                </div>
            </form>
        </div>
    )
}
export default CadastroBox;