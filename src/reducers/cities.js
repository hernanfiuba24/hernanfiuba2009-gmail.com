import { SET_FORECAST_DATA } from "../actions";

// tiene que ser una funcion pura, osea solo depende de los parametros pasados y nunca alterar el estado
export const cities = (state = {}, action) => {
    switch (action.type) {
        case SET_FORECAST_DATA:
            const {city, forecastData} = action.payload;
            return {...state, [city]: {forecastData}}
        default:
            return state;
    }
}