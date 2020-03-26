import React from "react";
import Charts from "./Charts";
import { ResponsiveChoropleth } from '@nivo/geo';
import { mapData1, mapData2, features } from "./data";

const MapChart = () => {
    const formatNumber = (num) => num.toString().split("").map((number, id, arr) => ((arr.length - id) % 3 === 0 && id > 0) ? "." + number : number).join("");

    const seeTooltip = (e, mapData) => {
        const { label, id, color, formattedValue } = e.feature;
        const location = mapData.filter(shape => shape.id === id)[0];
        return (formattedValue ? <strong style={{ backgroundColor: "rgba(255,255,255,0.8)", padding: "0.4rem", borderRadius: "0.2rem" }}>
            <span style={{ color, marginRight: "0.5rem", WebkitTextStrokeColor: "black", WebkitTextStrokeWidth: "0.01rem" }}>◼</span>{label}:
            {location.percent ? formatNumber(location.percent) : formatNumber(location.value)}
        </strong> : null)
    }

    return (
        <Charts
            key="map"
            chartName="Map"
            style={{ background: "red" }}
        >
            <ResponsiveChoropleth
                key="map1"
                title="Map with custom colors:"
                data={mapData1}
                width={500}
                height={300}
                features={features}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                colors={['royalblue', 'lightsteelblue', 'pink', 'salmon', 'tomato', 'blue', 'lightblue', 'red', 'green', 'yellow', 'lightgreen', 'gray', 'white', 'black', 'orange']}
                domain={[0, 15]}
                unknownColor="rgba(0,0,0,0.5)"
                label="properties.name"
                valueFormat=".1s"
                tooltip={(e) => seeTooltip(e, mapData1)}
                projectionTranslation={[0.3, 1.5]}
                projectionScale={250}
                enableGraticule={false}
                borderWidth={0.2}
                borderColor="black"
            />
            <ResponsiveChoropleth
                key="map2"
                title="Map with theme:"
                data={mapData2}
                width={500}
                height={300}
                features={features}
                margin={{ top: 0, right: 150, bottom: 0, left: 0 }}
                colors="PiYG"
                domain={[100, 550000]}
                unknownColor="rgba(0,0,0,0.1)"
                label="properties.name"
                valueFormat=".1s"
                tooltip={(e) => seeTooltip(e, mapData2)}
                projectionTranslation={[0.3, 1.5]}
                projectionScale={250}
                enableGraticule={false}
                borderWidth={0.2}
                borderColor="transparent"
                legends={[{
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: -10,
                    translateY: -10,
                    itemsSpacing: 0,
                    itemWidth: 85,
                    itemHeight: 26,
                    itemDirection: 'left-to-right',
                    itemTextColor: '#444444',
                    itemOpacity: 0.7,
                    symbolSize: 19,
                    effects: [{
                        on: 'hover',
                        style: {
                            itemTextColor: '#000000',
                            itemOpacity: 1
                        }
                    }]
                }]}
            />
        </Charts>
    )
};

export default MapChart;