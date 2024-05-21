import {useNavigate} from "react-router-dom";

export async function rotaSegurity (api,token, tipo = 'interno', navigate) {

    var data = {
        'token': JSON.parse(token)
    }

    await fetch(api + '/protegeRota', {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json' // Especifique o tipo de conteúdo como JSON
        },
        body: JSON.stringify(data) // Converta o objeto em uma string JSON
    })
        .then((resp) => resp.json())
        .then(function(data) {
            let acert = data // saberemos se deu certo
            console.log(acert)
            if (acert.status == 'success') {
                if (tipo == 'externo'){
                    navigate('/dashboard')
                }
            }else{
                localStorage.removeItem('token')
            }
            return false
        })
        .catch(function(error) {
            console.log(error);
        })

}