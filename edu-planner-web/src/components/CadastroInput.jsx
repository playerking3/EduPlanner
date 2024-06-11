import css from './CadastroInput.module.css';
import InputMask from 'react-input-mask';

function CadastroInput({ name, type, placeholder, setar, valor, mask }) {
    const handleChange = (event) => {
        const value = event.target.value;
        if (name === 'cargaHoraria' && (value > 8 || value < 0)) {
            return;
        }
        setar(value);
    }
    return (
        <div className={css.container}>
            <label htmlFor={name}>{placeholder} <span className={css.asterisco}>*</span> </label>
            <div className={css.inputGroup}>
                {mask ? (
                    <InputMask mask={mask} value={valor} onChange={(event) => setar(event.target.value)}>
                        {(inputProps) => <input {...inputProps} type={type} name={name} className={css.input} placeholder={placeholder} />}
                    </InputMask>
                ) : (
                    <input type={type} name={name} className={css.input} placeholder={placeholder} onChange={handleChange} value={valor}/>

                )}
            </div>
        </div>
    );
}

export default CadastroInput;
