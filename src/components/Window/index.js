import React, { useEffect, useState } from 'react';
import './style.css';

export default function Window() {

    const [light, setLight] = useState('apagada');

    function handleLight() {
        light === 'apagada' ? setLight('ligada') : setLight('apagada')
    }

    return (
        <div className="col s3 m4 l4">
            <div className={`janela ${light}`} onClick={handleLight}>
                <i className="material-icons">
                    {light === 'apagada' ?  'lightbulb_outline' :  'wb_incandescent'}
                </i>
            </div>
        </div>
    )
}