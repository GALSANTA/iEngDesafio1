import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Building from '../components/Building';
import Window from '../components/Window';
import ButtonSwitch from '../components/ButtonSwitch';
import './style.css';

function City() {

    const [data, setDia] = useState();

    useEffect(() => {
        navigator.geolocation.watchPosition(api);
    }, []);

    async function api({ coords }) {

        // 35.6684415 139.6007804 tokyo, Nippon
        // 21.3282956 -157.9391619 Havaí, EUA
        // -15.7745457 -48.3575684 Brasília, Brasil
        // -3.044653 -60.1071907 Manaus, Brasil

        const { latitude, longitude } = coords;

        var dados = await axios.get(`https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=today`);
        var sunrise = dados.data.results.sunrise.split(" ")[0];
        var sunset = dados.data.results.sunset.split(" ")[0];

        var data = new Date();
 
        var hora = data.getHours();
        
        if (hora > 11 && hora <= 23) {
            if (hora >= parseInt(sunrise[0]) && hora< parseInt(sunset[0]) + 12) {
                setDia('dia');
            } else {
                setDia('noite');
            }
        } else {
            if (hora >= parseInt(sunrise[0]) && hora < parseInt(sunset[0]) + 12) {
                setDia('dia');
            } else {
                setDia('noite');
            }
        }
    }

    return (
        <div className={`row cidade ${data}`}>
            <Building>
                <Window/>
                <Window/>
            </Building>
            <ButtonSwitch/>

        </div>
    )
}

export default City;
