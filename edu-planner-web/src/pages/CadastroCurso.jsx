import React, { useEffect, useState } from 'react';
import css from './CadastroCurso.module.css';
import CursoBox from '../components/CursoBox';
import { rotaSegurity } from '../functions/rotaSegurity';
import { useNavigate } from 'react-router-dom';
import SideBar from "../components/SideBar";

function CadastroCurso(props) {
    const [nome, setNome] = useState('');
    const [carga_horaria, setCarga_horaria] = useState('');
    const [descricao, setDescricao] = useState('');
    const [faixa_etaria, setFaixa_etaria] = useState('');
    const [imagem, setImagem] = useState('');
    const [categorias, setCategorias] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        rotaSegurity(props.api, localStorage.getItem('token'), navigate);
    }, []);

    async function enviar() {
        const data = {
            nome: nome,
            carga_horaria: carga_horaria,
            descricao: descricao,
            faixa_etaria: faixa_etaria,
            categorias: categorias,
            imagem: imagem,
            token: JSON.parse(localStorage.getItem('token')),
        };

        try {
            const response = await fetch(props.api + '/cadastrarCurso', {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Erro ao cadastrar curso');
            }

            const responseData = await response.json();
            if (responseData.status === 'success') {
                navigate('/dashboard');
                // Aviso: Este método precisa ser passado por props ou importado de outra forma
                props.atualizarCursos();
            } else {
                alert(responseData.info);
            }
        } catch (error) {
            console.error('Erro:', error);
        }
    }

    return (
        <div className={css.tudo}>
            <SideBar />
            <div className={css.conteudo}>
                <CursoBox
                    placeholder="Cadastro de curso"
                    nome={nome}
                    setNome={setNome}
                    cargaH={carga_horaria}
                    setCargaH={setCarga_horaria}
                    descricao={descricao}
                    setDescricao={setDescricao}
                    faixaE={faixa_etaria}
                    setFaixaE={setFaixa_etaria}
                    categorias={categorias}
                    setCategorias={setCategorias}
                    imagem={imagem}
                    setImagem={setImagem}
                    enviar={enviar}
                />
            </div>
        </div>
    );
}

export default CadastroCurso;
