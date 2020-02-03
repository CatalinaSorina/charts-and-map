import React from "react";
import "./Charts.css";

const Charts = ({ chartName, chart }) => (
    <div className="charts">
        <h2 className="chartTitle">{chartName}</h2>
        <div className="typeChart">
            {chart.map(chartType => (
                <div key={chartType.key}>
                    <p>{chartType.name}</p>
                    {chartType.element}
                </div>
            ))}
        </div>
    </div>
);

export default Charts;