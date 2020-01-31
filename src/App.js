import React from 'react';
import './App.css';
import BarCharts from "./components/BarCharts";
import MapCharts from "./components/MapCharts";

function App() {
  return (
    <div className="App">
      <header className="App-header">Charts and map</header>
      <BarCharts />
      <MapCharts />
    </div>
  );
}

export default App;
