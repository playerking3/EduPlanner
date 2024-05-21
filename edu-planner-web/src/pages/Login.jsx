import css from './Login.module.css'
import {useState} from "react";

function Login() {
    const [cpf, setCpf] = useState('')
    const [senha, setSenha] = useState('')
    function login () {
        
    }

    return(
        <div className={css.tudo}>
            <div className={css.bloco}>
                <div className={css.logo}>
                    <img src={"./logo.png"} alt="Logo"/>
                </div>
                <div className={css.form}>
                    <div className={css.infor}>
                        <label>CPF: <span className={css.asterisco}>*</span></label>
                        <input onChange={(event)=> setCpf(event.target.value)} value={cpf}/>
                    </div>
                    <div className={css.infor}>
                        <label>Senha: <span className={css.asterisco}>*</span></label>
                        <input onChange={(event) => setSenha(event.target.value)} value={senha}/>
                    </div>
                    <div>
                    <button>Fazer login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
