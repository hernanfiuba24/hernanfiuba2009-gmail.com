import React from 'react'
import WeatherLocation from './../components/WeatherLocation'

import './styles.css';

const strToComponents = (cities) => {
    return cities.map(city => <WeatherLocation key={city} city={city} />)
};

const LocationList = ({cities}) => {
    return(
        <div className="locationList">
            {strToComponents(cities)}
        </div>
    );
};

export default LocationList;