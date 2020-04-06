import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typograpfy from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {Grid, Col, Row} from 'react-flexbox-grid';
import './App.css';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';

const cities = [
  "Buenos Aires,ar",
  "Moscow,ru",
  "Washington,us",
  "Tokyo,jp"
];

class App extends Component {
  
  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation: ${city}`);
  }

  render() {
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typograpfy variant='h5' color='inherit'>
                Weather App
              </Typograpfy>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
              <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}>
                </LocationList>
          </Col>
          <Col xs={12} md={6}>
            
              <div className="details">
                <ForecastExtended></ForecastExtended>
              </div>
            
          </Col>
        </Row>
      </Grid>
    );
  }
  
}

export default App;
