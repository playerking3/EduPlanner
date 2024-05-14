import React, { useState } from 'react'
import css from './Periodicidade.module.css'
function Periodicidade() {
    const [selectedButtons, setSelectedButtons] = useState([])
    const handleButtonClick = (buttonIndex) => {
        if (selectedButtons.includes(buttonIndex)) {
            setSelectedButtons(selectedButtons.filter(index => index !== buttonIndex))
        } else {
            setSelectedButtons([...selectedButtons, buttonIndex])
        }
    }
    const buttons = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

    return (
        <div>
            <div>
                <p className={css.titulo}>Periodicidade <span className={css.asterisco}>*</span> </p>
                <div className={css.botao}>
                    {buttons.map((buttonLabel, index) => (
                        <button
                            key={index}
                            className={selectedButtons.includes(index) ? "button selected" : "button"}
                            onClick={() => handleButtonClick(index)}>
                            {buttonLabel}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Periodicidade;
