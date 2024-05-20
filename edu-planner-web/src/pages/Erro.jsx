import './Erro.css';

function Erro() {
    return (
        <div className="amarelo">
            <div className="brancao">
                <img src={"logo.png"} className="logo" alt="Logo" />
                <div className="informacoes">
                    <div className="textos">
                        <p className="num">404</p>
                        <p className="p">Página não foi encontrada</p>
                        <button className="button"> Voltar para home </button>
                    </div>
                    <div className="img">
                        <img src={"cara.png"} className="cara" alt="Cara" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Erro;
