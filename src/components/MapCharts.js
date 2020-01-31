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

    return (
        <Charts
            key="map"
            chartName="Map chart"
            chart={[{
                key: "map1",
                name: "Map chart:",
                element: <ResponsiveChoropleth
                    data={mapDataState}
                    width={950}
                    height={300}
                    features={mapPolygons}
                    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                    colors={['royalblue', 'lightsteelblue', 'pink', 'orange', 'salmon', 'tomato']}
                    domain={[0, 1000000]}
                    unknownColor="rgba(0,0,0,0.5)"
                    label="properties.name"
                    valueFormat=".2s"
                    projectionTranslation={[0.5, 0.6]}
                    projectionRotation={[0, 0, 0]}
                    enableGraticule={true}
                    graticuleLineWidth={2}
                    graticuleLineColor="#dddddd"
                    borderWidth={0.5}
                    borderColor="#004080"
                    legends={[{
                        anchor: 'left',
                        direction: 'column',
                        justify: false,
                        translateX: 32,
                        translateY: 0,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemsSpacing: 4,
                        symbolSize: 20,
                        itemDirection: 'left-to-right',
                        itemTextColor: '#777',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000',
                                    itemBackground: '#f7fafb'
                                }
                            }
                        ]
                    }]}
                />
            }]}
        />
    )
};

export default MapChart;