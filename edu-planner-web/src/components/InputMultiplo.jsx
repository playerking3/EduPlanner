import css from './InputMultiplo.module.css'
import React, {useState} from "react";
function InputMultiplo({label, list, setList}){
    const [numCats, setNumCats] = useState(0)
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
                <p className={css.titulop}>{label} <span className={css.asterisco}>*</span></p>
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