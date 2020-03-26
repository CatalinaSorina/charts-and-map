import React from "react";
import "./Charts.css";

const Charts = ({ chartName, children }) => (
    < div className="charts" >
        <h2 className="chartTitle">{chartName}</h2>
        < div className="typeChart">
            {React.Children && React.Children.map(children, child =>
                < div className="chart">
                    <p>{child.props.title}</p>
                    {child}
                </div >
            )}
        </div >
    </div >
);

export default Charts;