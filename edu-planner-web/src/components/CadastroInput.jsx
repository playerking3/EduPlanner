import css from './CadastroInput.module.css';
import InputMask from 'react-input-mask';
import React from 'react';

function CadastroInput({ name, type, placeholder, setar, valor, mask }) {
    const handleChange = (event) => {
        const value = event.target.value;
        setar(value);
    };

    const today = new Date().toISOString().split('T')[0];

    return (
        <div className={css.container}>
            <label htmlFor={name}>{placeholder} <span className={css.asterisco}>*</span> </label>
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
                        {...(type === 'date' && { max: today })}
                    />
                )}
            </div>
        </div>
    );
}

export default CadastroInput;
