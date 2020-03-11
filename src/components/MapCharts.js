import React, { useEffect, useState } from "react";
import Charts from "./Charts";
import { ResponsiveChoropleth } from '@nivo/geo';
import { mapData, features } from "./data";

const MapChart = () => {
    const [mapDataState, setMapData] = useState([]);
    const [mapPolygons, setMapPolygons] = useState([]);

    useEffect(() => {
        setMapData(mapData);
        setMapPolygons(features);
    }, [])

    const seeTooltip = (e) => {
        const { label, id, color, formattedValue } = e.feature;
        const location = mapDataState.filter(shape => shape.id === id)[0];
        return (formattedValue ? <strong style={{ backgroundColor: "rgba(255,255,255,0.8)", padding: "0.4rem", borderRadius: "0.2rem" }}>
            <span style={{ color, marginRight: "0.5rem", WebkitTextStrokeColor: "black", WebkitTextStrokeWidth: "0.01rem" }}>◼</span>{label}: {location.percent}
        </strong> : null)
    }

    return (
        <Charts
            key="map"
            chartName="Map chart"
            style={{ background: "red" }}
            chart={[{
                key: "map1",
                name: "Map chart:",
                element: <ResponsiveChoropleth
                    data={mapDataState}
                    width={500}
                    height={300}
                    features={mapPolygons}
                    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                    colors={['royalblue', 'lightsteelblue', 'pink', 'salmon', 'tomato', 'blue', 'lightblue', 'red', 'green', 'yellow', 'lightgreen', 'gray', 'white', 'black', 'orange']}
                    domain={[0, 15]}
                    unknownColor="rgba(0,0,0,0.5)"
                    label="properties.name"
                    valueFormat=".1s"
                    tooltip={seeTooltip}
                    projectionTranslation={[0.3, 1.5]}
                    projectionScale={250}
                    enableGraticule={false}
                    borderWidth={0.2}
                    borderColor="black"
                />
            }]}
        />
    )
};

export default MapChart;