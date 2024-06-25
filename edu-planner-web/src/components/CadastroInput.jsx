import css from './CadastroInput.module.css';
import InputMask from 'react-input-mask';
import React from 'react';

function CadastroInput({ name, type, placeholder, setar, valor, mask }) {
    const handleChange = (event) => {
        let value = event.target.value;
        if (name === 'duracaoAula') {
            value += ' horas';
        }
        setar(value);
    };

    const maxDate = type === 'date' && name === 'nascimento' ? new Date().toISOString().split('T')[0] : null;

    return (
        <div className={css.container}>
            <label htmlFor={name}>{placeholder} <span className={css.asterisco}>*</span></label>
            <div className={css.inputGroup}>
                {mask ? (
                    <InputMask mask={mask} value={valor} onChange={handleChange}>
                        {(inputProps) => <input {...inputProps} type={type} name={name} className={css.input} placeholder={placeholder} />}
                    </InputMask>
                ) : (
                    <input
                        type={type}
                        name={name}
                        className={css.input}
                        placeholder={placeholder}
                        onChange={handleChange}
                        value={valor}
                        {...(maxDate && { max: maxDate })}
                    />
                )}
            </div>
        </div>
    );
}

export default CadastroInput;
