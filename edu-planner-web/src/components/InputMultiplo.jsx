import css from './InputMultiplo.module.css'
import {useState} from "react";
function InputMultiplo({label}){
    const [numCats, setNumCats] = useState(0)
    const [list, setList] = useState([])
    function addInput(){
        setNumCats(numCats + 1)
    }

    function alterar(index,e){
       let obj = [...list]
       obj[index] = e.target.value
       console.log(obj)
       setList(obj)
    }

    return(
        <div className={css.container}>
            <div className={css.label}>
                <p>{label}</p>
                <div>
                    <i className={"fa-solid fa-plus fa-xl " + css.icon} onClick={addInput}></i>
                </div>
            </div>
            <div className={css.inputGroup}>
                {Array.from({length: numCats}).map((numero, index) => (
                    <input type={'text'} name={index} className={css.input} onChange={(event)=> alterar(index,event)}/>
                ))}
            </div>
        </div>
    )
}

export default InputMultiplo