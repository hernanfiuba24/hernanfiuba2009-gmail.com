import getForecastWeatherByCity from "../services/getForecastWeatherByCity";
import transformForecastWeather from "../services/transformForecastWeather";

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const setCity = payload => ({type:SET_CITY, payload});
const setForecastData = payload => ({type:SET_FORECAST_DATA, payload});

export const setSelectedCity = payload => {
    return dispatch => {
        const forecastWeatherUrl = getForecastWeatherByCity(payload);

        // activar en el estado un indicador de busqueda de datos
        dispatch(setCity(payload));
        fetch(forecastWeatherUrl).then(data => {
            return data.json();
        }).then( data => {
            const forecastData = transformForecastWeather(data);
            // modificar en el estado con resltados de la promise
            dispatch(setForecastData({city: payload, forecastData}));
        });
    }
}