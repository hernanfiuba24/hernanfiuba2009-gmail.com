import React from 'react'
import WeatherTempeture from './WeatherTempeture'
import WeatherExtraInfo from './WeatherExtraInfo'

import './styles.css'

const WeatherData = ({data : {tempeture, weatherState, humidity, wind}}) => (
    <div className="weatherDataCont">
        <WeatherTempeture className="tempeture" tempeture={tempeture} weatherState={weatherState}></WeatherTempeture>
        <WeatherExtraInfo humidity={humidity} wind={wind}></WeatherExtraInfo>
    </div>
)

export default WeatherData;