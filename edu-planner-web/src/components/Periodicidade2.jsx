import React, { useState } from 'react'
import css from './Periodicidade2.module.css'
import './Responsivo.module.css'
function Periodicidade2({selectedButtons}) {

    const buttons = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

    return (
        <div>
            <div className={css.container}>
                <div className={css.tudoPeriodicidade}>
                    {buttons.map((buttonLabel, index) => (
                        <button key={index} className={css.buttons} style={selectedButtons && selectedButtons.includes(index) ? {background: '#FF8C00'} : {background: '#FFD700'}} >
                            {buttonLabel}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Periodicidade2;
