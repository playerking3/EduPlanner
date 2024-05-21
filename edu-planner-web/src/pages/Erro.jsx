import css from './Erro.module.css';
import {Link} from "react-router-dom";

function Erro() {
    return (
        <div className={css.amarelo}>
            <div className={css.brancao}>
                <img src={"logo.png"} className={css.logo} alt="Logo" />
                <div className={css.informacoes}>
                    <div className={css.textos}>
                        <p className={css.numero}>404</p>
                        <p className={css.p}>Página não foi encontrada</p>
                        <Link to={'/'}><button className={css.botao}>Voltar para home</button></Link>
                    </div>
                    <div className={css.img}>
                        <img src={"cara.png"} className={css.cara} alt="Cara" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Erro;
