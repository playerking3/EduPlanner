import css from "./CadastroCurso.module.css";
import SideBar from "../components/SideBar";
import CursoBox from "../components/CursoBox";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {rotaSegurity} from "../functions/rotaSegurity";

function EditarCurso({api}){
    const { id } = useParams();
    const navigate = useNavigate();

    const [nome, setNome] = useState('')
    const [cargaH, setCargaH] = useState('')
    const [faixaE, setFaixaE] = useState('')
    const [categorias, setCategorias] = useState('')
    const [descricao, setDescricao] = useState('')
    const [imagem, setImagem] = useState('')

    useEffect(() => {
        rotaSegurity(api, localStorage.getItem('token'), navigate)
        getDados()
    }, []);

    async function getDados () {
        const data = {
            'id': id,
            'token': JSON.parse(localStorage.getItem('token'))
        }

        await fetch(api + '/getCursoId', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Especifique o tipo de conteúdo como JSON
            },
            body: JSON.stringify(data) // Converta o objeto em uma string JSON
        })
            .then((resp) => resp.json())
            .then(function(data) {
                let acert = data // saberemos se deu certo
                console.log(acert)
                if (acert.status === 'success') {
                    setNome(acert.infos[0])
                    setCargaH(acert.infos[2])
                    setFaixaE(acert.infos[3])
                    //setCategorias(acert.infos[4])
                    setDescricao(acert.infos[5])
                    setImagem(acert.infos[6])
                }

            })
            .catch(function(error) {
                console.log(error);
            })
    }

    async function editDados(){
        const data = {
            'id': id,
            'nome': nome,
            'cargaH':cargaH,
            'faixaE': faixaE,
            'categorias':categorias,
            'descricao': descricao,
            'imagem': imagem,
            'token': JSON.parse(localStorage.getItem('token'))
        }
        await fetch(api + '/editCurso', {

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
                console.log(acert)
                if (acert.status == 'success'){
                    navigate('/dashboard')
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
                <CursoBox
                    placeholder="editar curso"
                    nome={nome}
                    setNome={setNome}
                    cargaH={cargaH}
                    setCargaH={setCargaH}
                    descricao={descricao}
                    setDescricao={setDescricao}
                    faixaE={faixaE}
                    setFaixaE={setFaixaE}
                    categorias={categorias}
                    setCategorias={setCategorias}
                    imagem={imagem}
                    setImagem={setImagem}
                    enviar={editDados}
                ></CursoBox>
            </div>
        </div>
    )
}
export default EditarCurso