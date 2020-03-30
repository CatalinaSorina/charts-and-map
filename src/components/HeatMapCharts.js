import React from "react";
import { ResponsiveHeatMap } from '@nivo/heatmap';
import Charts from "./Charts";
import { heatMapData } from "./data";

const HeatMapCharts = () => (
    <Charts
        key="heatmap"
        chartName="Heat map chart"
    >
        <ResponsiveHeatMap
            key="heatmap1"
            title="Heat map:"
            data={heatMapData}
            keys={[
                'hot dog',
                'burger',
                'sandwich',
                'kebab',
                'fries',
                'donut',
                'junk',
                'sushi',
                'ramen',
                'curry',
                'udon'
            ]}
            indexBy="country"
            margin={{ top: 10, right: 0, bottom: 50, left: 50 }}
            forceSquare={true}
            colors="GnBu"
            axisTop={{
                orient: 'top',
                tickSize: 0,
                tickPadding: 8,
                tickRotation: -50,
                legend: '',
                legendOffset: -60
            }}
            axisRight={null}
            axisBottom={null}
            axisLeft={{
                orient: 'left',
                tickSize: 0,
                tickPadding: 8,
                tickRotation: 0,
                legend: 'country',
                legendPosition: 'middle',
                legendOffset: -40
            }}
            cellOpacity={1}
            cellBorderWidth={3}
            cellBorderColor={{ from: 'color', modifiers: [['darker', '0.7']] }}
            labelTextColor="#202020"
            defs={[{
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(0, 0, 0, 0.1)',
                rotation: -45,
                lineWidth: 4,
                spacing: 7
            }]}
            fill={[{ id: 'lines' }]}
            animate={true}
            motionStiffness={80}
            motionDamping={9}
            hoverTarget="cell"
            cellHoverOthersOpacity={0.25}
        />
        <ResponsiveHeatMap
            key="heatmap2"
            title="Heat map bottom axis and no legend:"
            data={heatMapData}
            keys={[
                'hot dog',
                'burger',
                'sandwich',
                'kebab',
                'fries',
                'donut',
                'junk',
                'sushi',
                'ramen',
                'curry',
                'udon'
            ]}
            indexBy="country"
            margin={{ top: 10, right: 60, bottom: 160, left: 50 }}
            forceSquare={true}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickSize: 0,
                tickPadding: 1,
                tickRotation: -90,
                legend: '',
                legendPosition: 'middle',
                legendOffset: 2
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 0,
                tickPadding: 8,
                tickRotation: 0,
                legend: '',
                legendPosition: 'middle',
                legendOffset: -40
            }}
            cellShape="circle"
            sizeVariation={0.5}
            cellOpacity={0.8}
            cellBorderWidth={1}
            cellBorderColor={{ from: 'color', modifiers: [['darker', '1.6']] }}
            labelTextColor={{ from: 'color', modifiers: [['darker', 1.8]] }}
            defs={[{
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(0, 0, 0, 0.1)',
                rotation: -45,
                lineWidth: 4,
                spacing: 7
            }]}
            fill={[{ id: 'lines' }]}
            animate={true}
            motionStiffness={80}
            motionDamping={9}
            hoverTarget="cell"
            cellHoverOthersOpacity={0.55}
        />
    </Charts>
)

export default HeatMapCharts;