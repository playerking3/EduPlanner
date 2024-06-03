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
import AsyncStorage from "@react-native-async-storage/async-storage";
import Calendario from "./components/Calendario";

const Drawer = createDrawerNavigator();

export default function App() {
  const [sairModal, setSairModal] = useState(false)

  const opDigital = async () => {
      const a = await AsyncStorage.getItem("digital")
      return a == "true"
  }

  const setOpcaoDigital = async (item) => {
      console.log("SALVA", item)
      AsyncStorage.setItem("digital", item)
  }

  return (
    <Dados.Provider value={{opDigital, setOpcaoDigital}}>
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
                <Drawer.Screen name="Calendario" component={Calendario} />
            </Drawer.Navigator>

            {sairModal && <Sair setSairModal={setSairModal} />}
        </NavigationContainer>
    </Dados.Provider>
  );
}
