import React, {Component} from 'react';
import {connect} from 'react-redux';
import LocationList from '../components/LocationList';
import { setCity } from '../actions';

class LocationListContainer extends Component {

    handleSelectedLocation = city => {
        console.log(`handleSelectedLocation: ${city}`);
        this.props.setCity(city);
      }

    render() {
        return(
            <LocationList cities={this.props.cities} onSelectedLocation={this.handleSelectedLocation}>
            </LocationList>
        )
    }
}

const mapDispatchToPropsActions = dispatch => ({
    setCity: value => dispatch(setCity(value))
  });
  
  export default connect(null, mapDispatchToPropsActions)(LocationListContainer)