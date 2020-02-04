import React from "react";
import { ResponsivePie } from '@nivo/pie';
import { pieData } from "./data";
import Charts from "./Charts";

const PieChart = () => (
    <Charts
        key="pie"
        chartName="Pie chart"
        chart={[{
            key: "pie1",
            name: "Pie chart with inner radius:",
            element: <ResponsivePie
                data={pieData}
                width={400}
                height={400}
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
        }, {
            key: "pie1",
            name: "Simple pie chart with patterns:",
            element: <ResponsivePie
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
        }, {
            key: "pie1",
            name: "Pie chart with no legend and radial labels:",
            element: <ResponsivePie
                data={pieData}
                width={500}
                height={500}
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
        }]}
    />
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