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
import { useState, createContext, useContext } from "react";
import CadastroSala from "./pages/CadastroSala";

function App() {


    const [api, setApi] = useState('http://127.0.0.1:5000')
  return (
        <BrowserRouter>
          <Routes>
              <Route path={'/cadastro-curso'} element={<CadastroCurso api={api} />}/>
              <Route path={'/editar-curso/:id'} element={<EditarCurso />}/>
              <Route path={'/login'} element={<Login api={api}/>}/>
              <Route path={'/cadastro-pessoa'} element={<Cadastro api={api}/>} />
              <Route path={'/editar-pessoa/:id'} element={<Edicao api={api}/>}/>
              <Route path={'dashboard'} element={<Dashboard/>}/>
              <Route path={'/cadastro-turma/:id'} element={<CadastroTurma api={api}/>}/>
              <Route path={'/cadastro-sala'} element={<CadastroSala api={api}/>}/>
              <Route path={'/'} element={<Home/>}/>
              <Route path={'/cursos'} element={<VisualizacaoCurso api={api}/>}/>
              <Route path={'*'} element={<Erro/>}/>
              <Route path={'/salas'} element={<VisualizacaoSala api={api}/>}/>
              <Route path={'/visualizacao-usuario'} element={<VizualizacaoUsuario api={api}/>}/>
          </Routes>
        </BrowserRouter>
  );
}

export default App;