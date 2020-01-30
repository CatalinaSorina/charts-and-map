import React from 'react';
import './App.css';
import Bar from "./components/Bar";
import { bardata } from "./components/data";

// console.log(bardata)

function App() {
  return (
    <div className="App">
      <header className="App-header">Charts and map</header>
      <div className="charts">
        <Bar data={bardata} horizontal={"horizontal"} />
        <Bar data={bardata} />
      </div>
    </div>
  );
}

export default App;
