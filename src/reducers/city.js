import { SET_CITY } from "../actions";

// tiene que ser una funcion pura, osea solo depende de los parametros pasados y nunca alterar el estado
export const city = (state = {}, action) => {
    switch (action.type) {
        case SET_CITY:
            return action.payload;
        default:
            return state;
    }
}