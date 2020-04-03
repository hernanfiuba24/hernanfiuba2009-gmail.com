import React from 'react'
import WeatherTempeture from './WeatherTempeture'
import WeatherExtraInfo from './WeatherExtraInfo'

import {SUNNY, CLOUD, CLOUDY, WINTER, RAIN, SNOW, WINDY} from '../../../constants/weathers';

import './styles.css'

const WeatherData = ({data : {tempeture, weatherState, humidity, wind}}) => (
    <div className="weatherDataCont">
        <WeatherTempeture tempeture={tempeture} weatherState={weatherState}></WeatherTempeture>
        <WeatherExtraInfo humidity={humidity} wind={wind}></WeatherExtraInfo>
    </div>
)

export default WeatherData;