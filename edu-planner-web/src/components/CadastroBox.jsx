import css from './CadastroBox.module.css'
import CadastroInput from "./CadastroInput";
import InputMultiplo from "./InputMultiplo";
import InputTextArea from "./InputTextArea";
import InputImagem2 from "./InputImagem2";
import BtnEnviar from "./BtnEnviar";
import ComboBox from "./ComboBox";

function CadastroBox ({placeholder, nome, setNome, funcao, setFuncao, cpf, setCpf, senha, setSenha, nascimento, setNascimento, foto, setFoto, email, setEmail, enviar}){
    return(
        <div className={css.box}>
            <div>
                <h1 className={css.h1}>{placeholder}</h1>
            </div>
            <form>
                <div className={css.formContainer}>
                    <div>
                        <CadastroInput placeholder={'Nome'} type={'text'} name={'nomeUser'} setar={setNome} valor={nome}/>
                        <CadastroInput placeholder={'Função'} type={'text'} name={'nomeUser'} setar={setFuncao} valor={funcao}/>
                        <InputImagem2 placeholder={'Adicionar imagem'} name={'img'}></InputImagem2>

                    </div>
                    <div>
                        <CadastroInput placeholder={'CPF'} type={'text'} name={'cpf'} setar={setCpf} valor={cpf}/>
                        <CadastroInput placeholder={'Data de nascimento'} type={'date'} name={'nascimento'} setar={setNascimento} valor={nascimento}/>
                        <CadastroInput placeholder={'Email'} type={'text'} name={'email'} setar={setEmail} valor={email}/>
                        <CadastroInput placeholder={'Senha'} type={'password'} name={'senha'} setar={setSenha} valor={senha}/>

                    </div>
                </div>
                <div>
                    <BtnEnviar placeholder='Salvar' funcao={enviar}></BtnEnviar>
                </div>
            </form>
        </div>
    )
}
export default CadastroBox;