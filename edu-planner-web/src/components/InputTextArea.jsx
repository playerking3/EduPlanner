import css from './InputTextArea.module.css'

function InputTextArea({name, placeholder}){
    return (
        <div className={css.container}>
            <label htmlFor={name}>{placeholder}</label>
            <div className={css.inputGroup}>
                <textarea name={name} className={css.input}/>
            </div>
        </div>
    )
}

export default InputTextArea