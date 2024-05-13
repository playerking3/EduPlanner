import css from './Login.module.css'

function Login() {
    return(
        <div className={css.tudo}>
            <div className={css.bloco}>
                <div className={css.logo}>
                    <img src={"./logoEdu.png"} alt="Logo"/>
                </div>
                <div className={css.form}>
                    <div className={css.infor}>
                        <label>CPF: <span className={css.asterisco}>*</span></label>
                        <input/>
                    </div>
                    <div className={css.infor}>
                        <label>Senha: <span className={css.asterisco}>*</span></label>
                        <input/>
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