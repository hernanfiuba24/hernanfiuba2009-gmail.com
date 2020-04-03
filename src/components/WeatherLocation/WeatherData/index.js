import React from 'react'
import WeatherTempeture from './WeatherTempeture'
import WeatherExtraInfo from './WeatherExtraInfo'

import {SUNNY, CLOUD, CLOUDY, WINTER, RAIN, SNOW, WINDY} from '../../../constants/weathers';

import './styles.css'

const WeatherData = () => (
    <div className="weatherDataCont">
        <WeatherTempeture tempeture={20} weatherState={"sunny"}></WeatherTempeture>
        <WeatherExtraInfo humidity={80} wind={"10 m/s"}></WeatherExtraInfo>
    </div>
)

export default WeatherData;