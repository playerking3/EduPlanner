import './App.css';
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CadastroCurso from "./pages/CadastroCurso";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import VisualizacaoCurso from "./pages/VisualizacaoCurso";
import VisualizacaoSala from "./pages/VisualizacaoSala";
import VizualizacaoUsuario from "./pages/VizualizacaoUsuario";

import Edicao from "./pages/Edicao";
import EditarCurso from "./pages/EditarCurso";
import CadastroTurma from './pages/CadastroTurma'
import Erro from "./pages/Erro";
import {useState} from "react";

function App() {
    const [api, setApi] = useState('http://192.168.1.134:5000/')
  return (
    <BrowserRouter>
      <Routes>
          <Route path={'/cadastro-curso'} element={<CadastroCurso />}/>
          <Route path={'/editar-curso'} element={<EditarCurso/>}/>
          <Route path={'/login'} element={<Login/>}/>
          <Route path={'/cadastro-pessoa'} element={<Cadastro api={api}/>} />
          <Route path={'/editar-pessoa'} element={<Edicao/>}/>
          <Route path={'dashboard'} element={<Dashboard/>}/>
          <Route path={'/cadastro-turma'} element={<CadastroTurma/>}/>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/cursos'} element={<VisualizacaoCurso/>}/>
          <Route path={'*'} element={<Erro/>}/>
          <Route path={'/salas'} element={<VisualizacaoSala/>}/>
          <Route path={'/visualizacao-usuario'} element={<VizualizacaoUsuario/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;