import css from "./ComboBoxMultiplo.module.css";
import React, {useEffect, useState} from "react";

function ComboBoxMultiplo({opcoes, label, name, list, setList}){
    const [numCats, setNumCats] = useState(0)

    useEffect(() => {
        console.log(opcoes)
    }, []);

    function addInput(){
        setNumCats(numCats + 1)
    }

    function alterar(index,e){
        let obj = [...list]
        obj[index] = e.target.value
        console.log(obj)
        setList(obj)
    }
    return (
        <div className={css.container}>
            <div className={css.label}>
                <p className={css.titulop}>{label} <span className={css.asterisco}>*</span></p>
                <div>
                <i className={"fa-solid fa-plus fa-xl " + css.icon} onClick={addInput}></i>
                </div>
            </div>
            <div className={css.inputGroup}>
                {Array.from({length: numCats}).map((numero, index) => (
                    <select className={css.select} id={name} onChange={(event)=> alterar(index,event)}>
                        {opcoes.map((item) =>
                            <option value={item}>{item}</option>
                        )}
                    </select>
                ))}
            </div>
        </div>
    )
}

export default ComboBoxMultiplo