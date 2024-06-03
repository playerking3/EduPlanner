import { useContext } from 'react';

export async function fecthBase (rota, data) {
    const api = useContext(ThemeContext);

    await fetch(api + '/' + rota, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Especifique o tipo de conteúdo como JSON
        },
        body: JSON.stringify(data) // Converta o objeto em uma string JSON
    })
        .then((resp) => resp.json())
        .then(function(data) {
            let acert = data // saberemos se deu certo
            return acert
        })
        .catch(function(error) {
            console.log(error);
        })

}