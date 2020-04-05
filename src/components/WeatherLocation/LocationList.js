import React from 'react'
import WeatherLocation from '.'

const LocationList = () => (
        <div>
            <WeatherLocation city="Buenos Aires,ar"></WeatherLocation>
            <WeatherLocation city="Trujillo,pe"></WeatherLocation>
            <WeatherLocation city="Bogota,col"></WeatherLocation>
        </div>
)

export default LocationList;