import React from 'react'
import WeatherLocation from './../components/WeatherLocation'

import './styles.css';

const LocationList = ({cities, onSelectedLocation}) => {

    const handleWeatherLocationClick = city => {
        console.log("handleWeatherLocationClick");
        onSelectedLocation(city);
    };

    const strToComponents = (cities) => {
        return cities.map(city => (
            <WeatherLocation
                key={city}
                city={city}
                onHandleWeatherLocationClick={() => handleWeatherLocationClick(city)}/>)
        )
    };


    return (
        <div className="locationList">
            {strToComponents(cities)}
        </div>
    );
};

export default LocationList;