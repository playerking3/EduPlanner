import css from './CadastroBox.module.css'
import CadastroInput from "./CadastroInput";
import InputImagem2 from "./InputImagem";
import BtnEnviar from "./BtnEnviar";
import ComboBox from "./ComboBox";

function CadastroBox ({placeholder, nome, setNome, setFuncao, cpf, setCpf, senha, setSenha, nascimento, setNascimento, foto, setFoto, email, setEmail, enviar}){
    return(
        <div className={css.box}>
            <div>
                <h1 className={css.h1}>{placeholder}</h1>
            </div>
            <form autocomplete="off">
                <div className={css.formContainer}>
                    <div className={css.maior} style={{width: '95%',display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
                        <CadastroInput placeholder={'Nome'} type={'text'} name={'nomeUser'} setar={setNome} valor={nome}/>
                        <ComboBox placeholder={'Função'} type={'text'} name={'nomeUser'} setar={setFuncao} opcoes={['Aluno', 'Professor', 'Coordenador']}/>
                        <InputImagem2 placeholder={'Adicionar imagem'} name={'img'} setar={setFoto} valor={foto}></InputImagem2>
                    </div>
                    <div className={css.maior} style={{width: '95%',display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
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