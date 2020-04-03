import React, {Component} from 'react';
import Location from './Location'
import WeatherData from './WeatherData';
import {SUNNY, CLOUDY} from '../../constants/weathers';
import './styles.css';

const data = {
    tempeture: 25,
    weatherState: SUNNY,
    humidity: 80,
    wind: "10 m/s"
};

const data2 = {
    tempeture: 5,
    weatherState: CLOUDY,
    humidity: 20,
    wind: "30 m/s"
};

class WeatherLocation extends Component {
    constructor() {
        super();
        this.state = {
            cityName : "Buenos Aires",
            data : data
        };
    }

    updateWeatherData = () => {
        console.log("updated");

        this.setState({
            data: data2,
        })
    }

    render() {
        const {cityName, data} = this.state;
        return(
            <div className="weatherLocationCont">
                <Location city={cityName}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.updateWeatherData}>actualizar</button>
            </div>
        )
    }
};

export default WeatherLocation;
