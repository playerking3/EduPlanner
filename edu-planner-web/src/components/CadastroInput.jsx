import css from './CadastroInput.module.css';
import InputMask from 'react-input-mask';

function CadastroInput({ name, type, placeholder, setar, valor, mask }) {
    const alteracaoDeEntrada = (event) => {
        setar(event.target.value);
    };

<<<<<<< HEAD
=======
function CadastroInput({ name, type, placeholder, setar, valor, desativo= false }) {
    const handleChange = (event) => {
        const value = event.target.value;
        setar(value);
    }
>>>>>>> 7b1feae87377ecf3e39971c7cf424e5da8e99768
    return (
        <div className={css.container}>
            <label htmlFor={name}>{placeholder} <span className={css.asterisco}>*</span> </label>
            <div className={css.inputGroup}>
<<<<<<< HEAD
                {mask ? (
                    <InputMask mask={mask} value={valor} onChange={alteracaoDeEntrada}>
                        {(inputProps) => <input {...inputProps} type={type} name={name} className={css.input} placeholder={placeholder} />}
                    </InputMask>
                ) : (
                    <input type={type} name={name} className={css.input} placeholder={placeholder} onChange={alteracaoDeEntrada} value={valor}/>
                )}
=======
                <input type={type} name={name} className={css.input} placeholder={placeholder} onChange={handleChange} value={valor} disabled={desativo}/>
>>>>>>> 7b1feae87377ecf3e39971c7cf424e5da8e99768
            </div>
        </div>
    );
}

export default CadastroInput;
