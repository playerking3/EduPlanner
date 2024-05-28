import React, {useState} from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Login from './components/Login';
import Home from './components/Home'
import Dados from './components/DadosContext.js';
import Hamburguer from './components/Hamburguer'
import Perfil from './components/Perfil'
import Cursos from './components/Cursos'
import Sair from './components/Sair'

const Drawer = createDrawerNavigator();

export default function App() {
  const [sairModal, setSairModal] = useState(false)

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <Hamburguer setSairModal={setSairModal} sairModal={sairModal} {...props} />}
        screenOptions={{ headerShown: false }}
        initialRouteName="Login"
      >
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Perfil" component={Perfil} />
        <Drawer.Screen name="Cursos" component={Cursos} />
      </Drawer.Navigator>

      {sairModal && <Sair setSairModal={setSairModal} />}
    </NavigationContainer>
  );
}
