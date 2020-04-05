import React from 'react'
import WeatherLocation from '.'

const strToComponents = (cities) => {
    return cities.map(city => <WeatherLocation city={city} />)
};

const LocationList = ({cities}) => {
    return(
        <div>
            {strToComponents(cities)}
        </div>
    );
};

export default LocationList;