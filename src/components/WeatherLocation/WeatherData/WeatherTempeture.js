import React from 'react';
import { WiDaySunny, WiCloud, WiCloudy, WiRain, WiSnow, WiWindy } from 'weather-icons-react';
import {SUNNY, CLOUD, CLOUDY, WINTER, RAIN, SNOW, WINDY} from '../../../constants/weathers';
import PropTypes from 'prop-types';
import './styles.css';

const icons = {
    SUNNY :  <WiDaySunny size={24} color="#000" />,
    CLOUD : <WiCloud size={24} colo="#000" />,
    CLOUDY : <WiCloudy size={24} colo="#000" />,
    RAIN :  <WiRain size={24} color="#000" />,
    SNOW : <WiSnow size={24} colo="#000" />,
    WINDY :  <WiWindy size={24} color="#000" />
};

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    if (icon)
        return icon;
    else
        return <WiDaySunny size={24} color="#000" />;
};

const WeatherTempeture = ({ tempeture, weatherState}) => (
    <div className="weatherTempetureCont"> 
        {
            getWeatherIcon(weatherState)
        }
        <span>{`${tempeture} C°`}</span>
    </div>
)

WeatherTempeture.prototype = {
    tempeture : PropTypes.number.isRequired,
    weatherState : PropTypes.string.isRequired
};

export default WeatherTempeture;