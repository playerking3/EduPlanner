import styles from "./AddFeriado.module.css";
import Swal from 'sweetalert2';
import {useState} from "react";
function AddFeriado({api}){
    const [nome, setNome] = useState()
    const [data, setData] = useState()

    async function abreModal(){
        Swal.fire({
            title: 'Adicionar feriado ou recesso: ',
            html: ` <input id="swal-input1" class="swal2-input" placeholder="Nome: " type="text"> <input id="swal-input2" class="swal2-input" placeholder="Data: " type="date">`,
            focusConfirm: false,
            preConfirm: () => {
                return [
                    document.getElementById("swal-input1").value,
                    document.getElementById("swal-input2").value
                ];
            }
        }).then(async (formValues) => {
            const dados = {
                token: JSON.parse(localStorage.getItem('token')),
                nome: formValues.value[0],
                data: formValues.value[1],
            };

            console.log(dados)

            await fetch(api + '/addFeriado', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dados)
            })
                .then((resp) => resp.json())
                .then(function (data) {
                    let acert = data;
                    console.log(acert)
                })
        })
    }

    return(
        <div>
            <button className={styles.btn} onClick={abreModal}>Adicionar feriado</button>
        </div>
    )
}
export default AddFeriado