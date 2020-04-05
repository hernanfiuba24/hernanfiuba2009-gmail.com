import React from 'react'
import WeatherLocation from '.'

const LocationList = () => (
        <div>
            <WeatherLocation city="Buenos Aires,ar"></WeatherLocation>
            <WeatherLocation city="Moscow,ru"></WeatherLocation>
            <WeatherLocation city="Washington,us"></WeatherLocation>
            <WeatherLocation city="Tokyo,jp"></WeatherLocation>
        </div>
)

export default LocationList;