import convert from 'convert-units';
import {CLOUD, DRIZZLE, RAIN, SNOW, SUNNY, THUNDER} from '../constants/weathers';

const getTemp = kelvin => {
    return convert(kelvin).from("K").to("C").toFixed(0)
};

const getWeatherState = weather => {
    const {id} = weather;
    if (200 <= id && id < 300) return THUNDER;
    else if (300 <= id && id < 400) return DRIZZLE;
    else if (500 <= id && id < 600) return RAIN;
    else if (600 <= id && id < 700) return SNOW;
    else if (id === 800) return SUNNY;
    else return CLOUD;
};

const transformWeather = weatherData => {
    const {temp, humidity} = weatherData.main;
    const {speed} = weatherData.wind;
    const weatherState = getWeatherState(weatherData.weather[0]);
    return {
        temperature: getTemp(temp),
        weatherState,
        humidity,
        wind: speed,
    };
};

export default transformWeather;