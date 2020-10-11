import {api_key, url_location_forecast_weather} from '../constants/open_weather_map_url'

const getForecastWeatherByCity = (city) => {
    return `${url_location_forecast_weather}?q=${city}&appid=${api_key}`
};

export default getForecastWeatherByCity;