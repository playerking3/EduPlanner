import css from './InputMultiplo.module.css'
import {useState} from "react";
function InputMultiplo({label}){
    const [numCats, setNumCats] = useState(1)
    function addInput(){
        setNumCats(numCats + 1)
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
                {Array.from({length: numCats}).map((numero) => (
                    <input type={'text'} name={numero} className={css.input}/>
                ))}
            </div>
        </div>
    )
}

export default InputMultiplo