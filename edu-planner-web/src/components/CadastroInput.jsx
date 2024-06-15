import css from './CadastroInput.module.css';

function CadastroInput({ name, type, placeholder, setar, valor, desativo= false }) {
    const handleChange = (event) => {
        const value = event.target.value;
        setar(value);
    }
    return (
        <div className={css.container}>
            <label htmlFor={name}>{placeholder} <span className={css.asterisco}>*</span> </label>
            <div className={css.inputGroup}>
                <input type={type} name={name} className={css.input} placeholder={placeholder} onChange={handleChange} value={valor} disabled={desativo}/>
            </div>
        </div>
    );
}

export default CadastroInput;
