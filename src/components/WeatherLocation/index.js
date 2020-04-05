import React, {Component} from 'react';
import Location from './Location'
import WeatherData from './WeatherData';
import transformWeather from '../../services/transformWeather';
import getWeatherByCity from './../../services/getWeatherByCity';
import CircularProgress from '@material-ui/core/CircularProgress'
import './styles.css';

class WeatherLocation extends Component {
    constructor(props) {
        super(props);
        const {city} = props;
        this.state = {
            city: city,
            data : null
        };
    }

    componentDidMount() {
        this.updateWeatherData();
    }
    
    updateWeatherData = () => {
        const apiWeather = getWeatherByCity(this.state.city);
        console.log("updated");
        console.log(apiWeather);
        fetch(apiWeather).then(resolve => {
            return resolve.json();
        }).then( data => {
            const newWeather = transformWeather(data);
            console.log(newWeather)
            this.setState({
                data: newWeather,
            })
        });
    }

    render() {
        const {city, data} = this.state;
        return(
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                {data != null ?
                  <WeatherData data={data}/>:
                    <CircularProgress size={50}/>
                }
            </div>
        )
    }
};

export default WeatherLocation;
