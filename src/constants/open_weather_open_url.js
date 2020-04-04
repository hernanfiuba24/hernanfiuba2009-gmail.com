const location = "Buenos Aires,ar";
const api_key = "61395e1581dd6fffe8717fe37b652473";
const url_location_weather = "http://api.openweathermap.org/data/2.5/weather";

export const apiWeather = `${url_location_weather}?q=${location}&appid=${api_key}`;
