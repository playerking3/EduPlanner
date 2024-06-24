import {createContext, useState} from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";

const Dados = createContext()


function DadosProvider({ children }) {
    const [auth, setAuth] = useState("")
    const [user, setUser] = useState({})

    const opDigital = async () => {
        const a = await AsyncStorage.getItem("digital")
        return a == "true"
    }

    const setOpcaoDigital = async (item) => {
        console.log("SALVA", item)
        AsyncStorage.setItem("digital", item)
    }


    const fetchData = async (url, method, body= null, id= null) => {
        console.log(url, method, body, id)

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        if (auth) {
            myHeaders.append("Authorization", "Bearer " + auth)
        }

        if (method in ['GET', 'POST', "PUT", "DELETE"]) {
            return {"mensagem": "Erro: Método não selecionado"}
        }

        if (method in ["PUT", "DELETE"] && id === null ) {
            return {"mensagem": "Erro: ID não selecionado"}
        }

        if (id !== null) {
            url += "/" + id
        }

        let config = {
            method: method,
            headers: myHeaders,
            redirect: "follow"
        }

        if (body) {
            config.body = JSON.stringify(body)
        }

        let rota = "http://10.92.20.40:5000" + url

        return fetch(rota, config)
            .then((response) => response.json())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
    }


    return (
        <Dados.Provider value={{setAuth, fetchData, user, setUser, opDigital, setOpcaoDigital}}>
            { children }
        </Dados.Provider>
    )
}


export {Dados, DadosProvider}
