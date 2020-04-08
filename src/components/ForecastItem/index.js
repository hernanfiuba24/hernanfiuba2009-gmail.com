import React from 'react';
import WeatherData from '../WeatherLocation/WeatherData';

const Forecastitem = ({weekDay, hour, data}) => (
    <div>
        <div>{weekDay} Hora: {hour} hs</div>
        <WeatherData data={data}></WeatherData>
    </div>
)

export default Forecastitem;