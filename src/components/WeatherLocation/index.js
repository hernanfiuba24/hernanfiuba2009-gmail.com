import React, {Component} from 'react';
import Location from './Location'
import WeatherData from './WeatherData';
import {SUNNY} from '../../constants/weathers';
import './styles.css';

const location = "Buenos Aires,ar";
const api_key = "61395e1581dd6fffe8717fe37b652473";
const url_location_weather = "http://api.openweathermap.org/data/2.5/weather";

const url = `${url_location_weather}?q=${location}&appid=${api_key}`;

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
    getWeatherState = weatherData => {
        return SUNNY;
    }
    getWeather = weatherData => {
        const {temp, humidity} = weatherData.main;
        const {speed} = weatherData.wind;
        const weatherState = this.getWeatherState();
        const weather = {
            tempeture : temp,
            weatherState,
            humidity,
            wind : speed,
        };
        return weather;
    }

    updateWeatherData = () => {
        console.log("updated");
        fetch(url).then(resolve => {
            return resolve.json();
        }).then( data => {
            const newWeather = this.getWeather(data);
            console.log(newWeather)
            this.setState({
                data: newWeather,
            })
            debugger;
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
