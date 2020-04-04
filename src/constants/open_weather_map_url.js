const location = "Buenos Aires,ar";
const api_key = `${process.env.REACT_APP_OPEN_WEATHER_MAP_KEY}`;
debugger;
const url_location_weather = "http://api.openweathermap.org/data/2.5/weather";

export const apiWeather = `${url_location_weather}?q=${location}&appid=${api_key}`;
