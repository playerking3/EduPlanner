import React, {useState} from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Login from './components/Login';
import Home from './components/Home'
import Dados from './components/DadosContext.js';
import Hamburguer from './components/Hamburguer'
import Perfil from './components/Perfil'
import PerfilView from './components/PerfilView'
import Cursos from './components/Cursos'
import Sair from './components/Sair'
import AsyncStorage from "@react-native-async-storage/async-storage";
import Calendario from "./components/Calendario";
import {DadosProvider} from "./context/context";

const Drawer = createDrawerNavigator();

export default function App() {
  const [sairModal, setSairModal] = useState(false)

  return (
    <DadosProvider>
        <NavigationContainer>
            <Drawer.Navigator drawerContent={(props) => <Hamburguer setSairModal={setSairModal} sairModal={sairModal} {...props} />}
                screenOptions={{ headerShown: false }}
                initialRouteName="Login">
                <Drawer.Screen name="Login" component={Login} />
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Perfil" component={Perfil} />
                <Drawer.Screen name="PerfilView" component={PerfilView} />
                <Drawer.Screen name="Cursos" component={Cursos} />
                <Drawer.Screen name="Calendario" component={Calendario} />
            </Drawer.Navigator>

            {sairModal && <Sair setSairModal={setSairModal} />}
        </NavigationContainer>
    </DadosProvider>
  );
}
