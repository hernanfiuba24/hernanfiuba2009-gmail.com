
import {api_key, url_location_weather} from './../constants/open_weather_map_url'

const getWeatherByCity = (city) => {
    return `${url_location_weather}?q=${city}&appid=${api_key}`
    };

export default getWeatherByCity;