import React, { useState } from 'react'
import css from './Periodicidade.module.css'
function Periodicidade({selectedButtons, setSelectedButtons}) {

    const handleButtonClick = (buttonIndex, event) => {
        event.preventDefault()
        if (selectedButtons.includes(buttonIndex)) {
            setSelectedButtons(selectedButtons.filter(index => index !== buttonIndex))
            event.target.style.background = '#FFD700'
        } else {
            setSelectedButtons([...selectedButtons, buttonIndex])
            event.target.style.background = '#FF8C00'
        }
    }
    const buttons = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

    return (
        <div>
            <div className={css.container}>
                <p className={css.titulo}>Periodicidade <span className={css.asterisco}>*</span> </p>
                <div className={css.tudoPeriodicidade}>
                    {buttons.map((buttonLabel, index) => (
                        <button
                            key={index}
                            className={css.buttons}
                            onClick={(event) => handleButtonClick(index, event)}>
                            {buttonLabel}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Periodicidade;
