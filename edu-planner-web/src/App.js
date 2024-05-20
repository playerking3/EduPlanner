import './App.css';
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CadastroCurso from "./pages/CadastroCurso";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import VisualizacaoCurso from "./pages/VisualizacaoCurso";
import Edicao from "./pages/Edicao";
import EditarCurso from "./pages/EditarCurso";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path={'/cadastro-curso'} element={<CadastroCurso />}/>
          <Route path={'/editar-curso'} element={<EditarCurso/>}/>
          <Route path={'/login'} element={<Login/>}/>
          <Route path={'/cadastro-pessoa'} element={<Cadastro/>} />
          <Route path={'/editar-pessoa'} element={<Edicao/>}/>
          <Route path={'/dashboard'} element={<Dashboard/>}/>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/cursos'} element={<VisualizacaoCurso/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
