import React, {Component} from 'react';
import Location from './Location'
import WeatherData from './WeatherData';
import {SUNNY} from '../../constants/weathers';
import transformWeather from '../../services/transformWeather';
import {apiWeather} from '../../constants/open_weather_map_url';
import './styles.css';

const data = {
    tempeture: 25,
    weatherState: SUNNY,
    humidity: 80,
    wind: "10 m/s"
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
        console.log(apiWeather);
        fetch(apiWeather).then(resolve => {
            return resolve.json();
        }).then( data => {
            const newWeather = transformWeather(data);
            console.log(newWeather)
            this.setState({
                data: newWeather,
            })
        });
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
