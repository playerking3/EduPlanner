import logo from './logo.svg';
import './App.css';
import Cadastro from "./components/Cadastro";
import Edicao from "./components/Edicao";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Cadastro></Cadastro>
        <Edicao></Edicao>
        <Login></Login>

    </div>
  );
}

export default App;
