import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typograpfy from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {Col, Grid, Row} from 'react-flexbox-grid';

import './App.css';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';

const cities = [
    "Buenos Aires, ar",
    "Trujillo, pe",
    "Moscow, ru",
    "Washington, us",
    "Tokyo, jp"
];

class App extends Component {

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
                        <LocationListContainer cities={cities}>
                        </LocationListContainer>
                    </Col>
                    <Col xs={12} md={6}>

                        <div className="details">
                            <ForecastExtendedContainer>
                            </ForecastExtendedContainer>
                        </div>

                    </Col>
                </Row>
            </Grid>
        );
    }

}

export default App;