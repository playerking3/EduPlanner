import SideBar from "../components/SideBar";
import css from './CadastroCurso.module.css'
import CursoBox from "../components/CursoBox";
import {useEffect, useState} from "react";
import {rotaSegurity} from "../functions/rotaSegurity";
import {useNavigate} from "react-router-dom";

function CadastroCurso(props){
    const [nome, setNome] = useState('')
    const [carga_horaria, setCarga_horaria] = useState('')
    const [descricao, setDescricao] = useState('')
    const [faixa_etaria, setFaixa_etaria] = useState('')
    const [imagem, setImagem] = useState('')
    const [categorias, setCategorias] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        rotaSegurity(props.api, localStorage.getItem('token'), navigate)
    }, []);

    async function enviar(){
        console.log(nome, carga_horaria, descricao, faixa_etaria, categorias, imagem)

        const data = {
            'nome':nome,
            'carga_horaria':carga_horaria,
            'descricao':descricao,
            'faixa_etaria': faixa_etaria,
            'categorias': categorias,
            'imagem': imagem,
            'token': JSON.parse(localStorage.getItem('token'))
        }

        await fetch(props.api + '/cadastrarCurso', {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json' // Especifique o tipo de conteúdo como JSON
            },
            body: JSON.stringify(data) // Converta o objeto em uma string JSON
        })
            .then((resp) => resp.json())
            .then(function(data) {
                let acert = data // saberemos se deu certo
                if (acert.status == 'success') {
                    navigate('/dashboard')
                }
                else {
                    alert(acert.info)
                }
            })
            .catch(function(error) {
                console.log(error);
            })
    }

    return(
        <div className={css.tudo}>
            <SideBar></SideBar>
            <div className={css.conteudo}>
                <CursoBox placeholder='Cadastro de curso' nome={nome} setNome={setNome} cargaH={carga_horaria} setCargaH={setCarga_horaria} descricao={descricao} setDescricao={setDescricao} faixaE={faixa_etaria} setFaixaE={setFaixa_etaria} categorias={categorias} setCategorias={setCategorias} imagem={imagem} setImagem={setImagem} enviar={enviar}></CursoBox>
            </div>
        </div>
    )
}

export default CadastroCurso