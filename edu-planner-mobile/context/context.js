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
            headers: {
                "Content-Type": "application/json"
            }
        }

        if (body) {
            config.body = JSON.stringify(body)
        }

        if (auth) {
            config.headers.Authorization = "Bearer " + auth
        }

        let rota = "http://192.168.1.134:5000"+url
        return await fetch(rota, config)
            .then(response => response.json())
            .catch(error => console.warn(error))
    }


    return (
        <Dados.Provider value={{setAuth, fetchData, user, setUser, opDigital, setOpcaoDigital}}>
            { children }
        </Dados.Provider>
    )
}


export {Dados, DadosProvider}
