import React from "react";
import { ChartsHolder, ChartsTitle, ChartTypeHolder, Chart } from "./styles";

const Charts = ({ chartName, children }) => (
    <ChartsHolder>
        <ChartsTitle>{chartName}</ChartsTitle>
        <ChartTypeHolder>
            {React.Children && React.Children.map(children, child =>
                <Chart>
                    <p>{child.props.title}</p>
                    {child}
                </Chart>
            )}
        </ChartTypeHolder>
    </ChartsHolder>
);

export default Charts;