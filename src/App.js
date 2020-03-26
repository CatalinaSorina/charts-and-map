import React from 'react';
import './App.css';
import BarCharts from "./components/BarCharts";
import MapCharts from "./components/MapCharts";
import PieCharts from "./components/PieCharts";
// import HeatMapCharts from "./components/HeatMapCharts";

function App() {
  return (
    < div className="App">
      <header className="App-header">Charts and map</header>
      < div className="AppCharts">
        <MapCharts />
        <PieCharts />
        <BarCharts />
        {/* <HeatMapCharts /> */}
      </ div>
    </ div>
  );
}

export default App;
