import React from "react";
import { ResponsivePie } from '@nivo/pie';
import { pieData } from "./data";
import Charts from "./Charts";

const PieChart = () => (
    <Charts
        key="pie"
        chartName="Pie chart"
        style={{ background: "red" }}
        chart={[{
            key: "pie1",
            name: "Pie chart:",
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
                borderWidth={2}
                borderColor="#373737"
                enableRadialLabels={false}
                radialLabelsSkipAngle={0}
                radialLabelsTextXOffset={6}
                radialLabelsTextColor="#252525"
                radialLabelsLinkOffset={0}
                radialLabelsLinkDiagonalLength={16}
                radialLabelsLinkHorizontalLength={2}
                radialLabelsLinkStrokeWidth={1}
                radialLabelsLinkColor={{ from: 'color' }}
                sliceLabel="id"
                slicesLabelsSkipAngle={7}
                slicesLabelsTextColor="#2e2e2e"
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                defs={[
                    {
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
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'ruby'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'c'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'go'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'python'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'scala'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'lisp'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'elixir'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'javascript'
                        },
                        id: 'lines'
                    }
                ]}
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
            name: "Pie chart:",
            element: <ResponsivePie
                data={pieData}
                width={300}
                height={300}
                margin={{ top: 0, right: 0, bottom: 80, left: 0 }}
                padAngle={0.7}
                cornerRadius={5}
                colors={['royalblue', 'lightsteelblue', 'pink', 'salmon', 'tomato']}
                borderWidth={2}
                borderColor="#373737"
                enableRadialLabels={false}
                radialLabelsSkipAngle={0}
                radialLabelsTextXOffset={6}
                radialLabelsTextColor="#252525"
                radialLabelsLinkOffset={0}
                radialLabelsLinkDiagonalLength={16}
                radialLabelsLinkHorizontalLength={2}
                radialLabelsLinkStrokeWidth={1}
                radialLabelsLinkColor={{ from: 'color' }}
                sliceLabel="value"
                slicesLabelsSkipAngle={7}
                slicesLabelsTextColor="#2e2e2e"
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                defs={[
                    {
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
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'ruby'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'c'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'go'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'python'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'scala'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'lisp'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'elixir'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'javascript'
                        },
                        id: 'lines'
                    }
                ]}
                legends={[
                    {
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
                    }
                ]}
            />
        }]}
    />
)

export default PieChart;