import React from "react";
import { ResponsivePie } from '@nivo/pie';
import { pieData } from "./data";
import Charts from "./Charts";

const PieChart = () => (
    <Charts
        key="pie"
        chartName="Pie chart"
    >
        <ResponsivePie
            key="pie1"
            title="Pie chart with inner radius:"
            data={pieData}
            width={300}
            height={300}
            margin={{ top: 0, right: 0, bottom: 80, left: 0 }}
            sortByValue={true}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={5}
            colors={{ scheme: 'pastel1' }}
            borderWidth={1}
            borderColor="#373737"
            enableRadialLabels={false}
            sliceLabel="id"
            slicesLabelsSkipAngle={7}
            slicesLabelsTextColor="#2e2e2e"
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            defs={defs}
            fill={[{
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'css'
                },
                id: 'lines'
            }]}
            legends={[{
                anchor: 'bottom',
                direction: 'row',
                translateY: 40,
                itemOpacity: 0.5,
                itemWidth: 50,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'top-to-bottom',
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [{
                    on: 'hover',
                    style: {
                        itemTextColor: '#2e2e2e',
                        itemOpacity: 1
                    }
                }]
            }]}
        />
        <ResponsivePie
            title="Pie chart with no legend and radial labels:"
            key="pie3"
            data={pieData}
            width={350}
            height={350}
            margin={{ top: 20, right: 80, bottom: 80, left: 80 }}
            padAngle={0.7}
            cornerRadius={5}
            colors={{ scheme: 'accent' }}
            borderWidth={2}
            borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
            radialLabelsSkipAngle={0}
            radialLabelsTextXOffset={10}
            radialLabelsTextColor="black"
            radialLabelsLinkOffset={0}
            radialLabelsLinkDiagonalLength={15}
            radialLabelsLinkHorizontalLength={15}
            radialLabelsLinkStrokeWidth={5}
            radialLabelsLinkColor={{ from: 'color', modifiers: [] }}
            sliceLabel="value"
            slicesLabelsSkipAngle={7}
            slicesLabelsTextColor="#2e2e2e"
            animate={true}
            motionStiffness={90}
            motionDamping={15}
        />
        <ResponsivePie
            key="pie2"
            title="Simple pie chart with patterns:"
            data={pieData}
            width={300}
            height={300}
            margin={{ top: 0, right: 0, bottom: 80, left: 0 }}
            padAngle={0.7}
            cornerRadius={5}
            colors={['royalblue', 'lightsteelblue', 'pink', 'salmon', 'tomato']}
            borderWidth={0.5}
            borderColor={{ theme: 'grid.line.stroke' }}
            enableRadialLabels={false}
            sliceLabel="value"
            slicesLabelsSkipAngle={7}
            slicesLabelsTextColor="#2e2e2e"
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            defs={defs}
            fill={[{
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'css'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'java'
                },
                id: 'lines'
            }]}
            legends={[{
                anchor: 'bottom',
                direction: 'row',
                translateY: 60,
                itemWidth: 50,
                itemHeight: 20,
                itemTextColor: '#999',
                itemDirection: 'bottom-to-top',
                symbolSize: 18,
                symbolShape: 'square',
                effects: [{
                    on: 'hover',
                    style: {
                        itemTextColor: '#2e2e2e'
                    }
                }]
            }]}
        />
    </Charts >
);

const defs = [{
    id: 'dots',
    type: 'patternDots',
    background: 'inherit',
    color: 'rgba(255, 255, 255, 0.3)',
    size: 4,
    padding: 1,
    stagger: true
},
{
    id: 'lines',
    type: 'patternLines',
    background: 'inherit',
    color: 'rgba(255, 255, 255, 0.3)',
    rotation: -45,
    lineWidth: 6,
    spacing: 10
}]

export default PieChart;