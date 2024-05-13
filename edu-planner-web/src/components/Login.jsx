import css from './Login.module.css'

function Login() {
    return(
        <div className={css.tudo}>
<<<<<<< Updated upstream
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
=======
            <div className={css.logo}>
                <img src={"./Logo.png"}/>
            </div>
            <div className={css.form}>
                <div>
                    <input placeholder={'Nome'}/>
                </div>
                <div>
                    <input placeholder={'Senha'}/>
                </div>
                <div>
                    <button>Enviar</button>
>>>>>>> Stashed changes
                </div>
            </div>
        </div>
    )
}

export default Login;