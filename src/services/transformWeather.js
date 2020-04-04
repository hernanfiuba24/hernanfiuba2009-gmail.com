import convert from 'convert-units';
import {SUNNY} from '../constants/weathers';

const getTemp = kelvin => {
    return convert(kelvin).from("K").to("C").toFixed(2)
}

const getWeatherState = weatherData => {
    return SUNNY;
}

const transformWeather = weatherData => {
    const {temp, humidity} = weatherData.main;
    const {speed} = weatherData.wind;
    const weatherState = getWeatherState();
    const weather = {
        tempeture : getTemp(temp),
        weatherState,
        humidity,
        wind : speed,
    };
    return weather;
}

export default transformWeather;