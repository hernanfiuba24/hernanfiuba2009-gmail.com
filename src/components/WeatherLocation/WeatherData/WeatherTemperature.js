import React from 'react';
import { WiDaySunny, WiCloud, WiRain, WiSnow, WiWindy, WiDayThunderstorm, WiRaindrops } from 'weather-icons-react';
import {SUNNY, CLOUD, RAIN, SNOW, WINDY, THUNDER, DRIZZLE} from '../../../constants/weathers';
import PropTypes from 'prop-types';
import './styles.css';

const sizeIcon = "40";
const icons = {
    [SUNNY] :  <WiDaySunny className="wiicon" size={sizeIcon} />,
    [CLOUD] : <WiCloud className="wiicon" size={sizeIcon} />,
    [RAIN] : <WiRain className="wiicon" size={sizeIcon} />,
    [SNOW] : <WiSnow className="wiicon" size={sizeIcon} />,
    [WINDY] : <WiWindy className="wiicon" size={sizeIcon} />,
    [THUNDER] : <WiDayThunderstorm className="wiicon" size={sizeIcon} />,
    [DRIZZLE] : <WiRaindrops className="wiicon" size={sizeIcon} />
};

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    if (icon)
        return icon;
    else
        return <WiDaySunny className="wiicon" size={sizeIcon} />;
};

const WeatherTemperature = ({ temperature, weatherState}) => (
    <div className="weatherTemperatureCont">
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature">{temperature}</span>
        <span className="temperatureType"> C°</span>
    </div>
);

WeatherTemperature.prototype = {
    temperature : PropTypes.number.isRequired,
    weatherState : PropTypes.string.isRequired
};

export default WeatherTemperature;