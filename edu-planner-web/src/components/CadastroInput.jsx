import css from './CadastroInput.module.css';
import InputMask from 'react-input-mask';

function CadastroInput({ name, type, placeholder, setar, valor, mask }) {
    const alteracaoDeEntrada = (event) => {
        setar(event.target.value);
    };

    return (
        <div className={css.container}>
            <label htmlFor={name}>{placeholder} <span className={css.asterisco}>*</span> </label>
            <div className={css.inputGroup}>
                {mask ? (
                    <InputMask mask={mask} value={valor} onChange={alteracaoDeEntrada}>
                        {(inputProps) => <input {...inputProps} type={type} name={name} className={css.input} placeholder={placeholder} />}
                    </InputMask>
                ) : (
                    <input type={type} name={name} className={css.input} placeholder={placeholder} onChange={alteracaoDeEntrada} value={valor}/>
                )}
            </div>
        </div>
    );
}

export default CadastroInput;
