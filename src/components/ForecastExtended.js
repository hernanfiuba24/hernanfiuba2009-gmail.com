import React, {Component} from 'react';
import './styles.css';
import Forecastitem from './ForecastItem';
import { SUNNY } from '../constants/weathers';

const days = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes"
];

const data = {
    tempeture : 25,
    weatherState : SUNNY,
    humidity: 50,
    wind: "2"
}

class ForecastExtended extends Component {

    renderForecastItemDays() {
        return days.map(day => (<Forecastitem weekDay={day} hour={12} data={data}></Forecastitem>))
    }

    render( {city} = this.props) {
        return (
            <div>
                <h2 className="forecast-title">Pronóstico extendido {city}</h2>
                {this.renderForecastItemDays()}
            </div>
        )
    }
}

export default ForecastExtended;