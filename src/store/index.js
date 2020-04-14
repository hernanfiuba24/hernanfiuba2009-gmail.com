
import {createStore, applyMiddleware, ActionCreatorsMapObject, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const initialState = {
    city: "Buenos Aires, ar"
};

const composetEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, initialState, composetEnhacers(applyMiddleware(thunk)));

// en caso de que no se quiera visualizar en la dev-tools
// export const store = createStore(city, initialState, applyMiddleware(thunk));
