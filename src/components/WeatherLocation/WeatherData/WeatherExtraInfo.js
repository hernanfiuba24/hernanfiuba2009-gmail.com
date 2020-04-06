import React from 'react';
import './styles.css';

const WeatherExtraInfo = ({ humidity, wind }) => (
    <div className="weatherExtraInfoCont">
        <span className="extraInfoText">{`${humidity} %`}</span>
        <span className="extraInfoText">{wind}</span>
    </div>
)

export default WeatherExtraInfo;