import React, {Component} from 'react';
import './styles.css';
import Forecastitem from './ForecastItem';
import getForecastWeatherByCity from '../services/getForecastWeatherByCity';
import transformForecastWeather from '../services/transformForecastWeather';

class ForecastExtended extends Component {

    constructor({city}) {
        super();
        this.state = {
            forecastData : null,
            city,
        }
    }
    
    componentDidMount() {
        this.updateCity(this.props.city)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.city !== this.props.city) {
            this.setState({forecastData:null});
            this.updateCity(nextProps.city);
        }
    }

    updateCity = city => {
        const forecastWeatherUrl = getForecastWeatherByCity(city);
        fetch(forecastWeatherUrl).then(resolve => {
            return resolve.json();
        }).then( data => {
            const forecastData = transformForecastWeather(data);
            this.setState({forecastData});
        })
    }

    renderForecastItemDays(forecastData) {
        return forecastData.map(forecast => (
            <Forecastitem 
                    key={`${forecast.weekDay}${forecast.hour}`}
                    weekDay={forecast.weekDay}
                    hour={forecast.hour}
                    data={forecast.data}>
            </Forecastitem>))
    }

    renderProgres() {
        return <h3>Cargando pronostico extedido</h3>
    }

    render() {
        const {city} = this.props;
        const {forecastData} = this.state;
        return (
            <div>
                <h2 className="forecast-title">Pronóstico extendido {city}</h2>
                { forecastData ?
                    this.renderForecastItemDays(forecastData) :
                    this.renderProgres()      
                }
            </div>
        )
    }
}

export default ForecastExtended;