import styles from './Erro.css';

function Erro() {
    return (
        <div className="amarelo">
            <div className="brancao">
                <img src={"logo.png"} className="logo2" alt="Logo" />
                <div className="informacoes">
                    <div className="textos2">
                        <p className="num">404</p>
                        <p className="p">Página não foi encontrada</p>
                        <button className="button2"> Voltar para home </button>
                    </div>
                    <div className="img2">
                        <img src={"cara.png"} className="cara" alt="Cara" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Erro;
