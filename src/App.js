import React from 'react';
import './App.css';
import LocationList from './components/WeatherLocation/LocationList';

const cities = [
  "Buenos Aires",
  "Moscow,ru",
  "Washington,us",
  "Tokyo,jp"
];

function App() {
  return (
    <div className="App">
      <LocationList cities={cities} />
    </div>
  );
}

export default App;
