import React, {Component} from 'react';
import './styles.css';

class ForecastExtended extends Component {
    
    render( {city} = this.props) {
        return (
            <div>
                <h2 className="forecast-title">Pronóstico extendido {city}</h2>
            </div>
        )
    }
}

export default ForecastExtended;