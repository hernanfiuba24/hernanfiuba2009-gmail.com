import React from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typograpfy from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {Grid, Col, Row} from 'react-flexbox-grid';
import './App.css';
import LocationList from './components/LocationList';

const cities = [
  "Buenos Aires,ar",
  "Moscow,ru",
  "Washington,us",
  "Tokyo,jp"
];

function App() {
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
            <LocationList cities={cities}>
              </LocationList>
        </Col>
        <Col xs={12} md={6}>
          <Paper zDepth={4}>
            <div className="details">
            </div>
          </Paper>
        </Col>
      </Row>
    </Grid>
  );
}

export default App;
