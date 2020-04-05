import React from 'react';
import './App.css';
import WeatherLocation from  './components/WeatherLocation'

function App() {
  return (
    <div className="App">
      <WeatherLocation city={"Buenos Aires, ar"}></WeatherLocation>
    </div>
  );
}

export default App;
