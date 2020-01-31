import React, { useEffect, useState }  from "react";
import Charts from "./Charts";
import { Bar } from '@nivo/bar';
import { bardata, bardataKeys } from "./data";

const BarChart = () => {
    const [data, setBarData] = useState([]);
    const [keys, setKeys] = useState([]);

    useEffect(() => {
        setBarData(bardata);
        setKeys(bardataKeys);
    }, [])

    return (
        <Charts
            chartName="Bar chart"
            chart={[{
                key: "bar1",
                name: "Bar vertical type:",
                element: <Bar
                    data={data}
                    keys={keys}
                    width={450}
                    height={300}
                    indexBy="country"
                    margin={{ top: 10, right: 100, bottom: 85, left: 50 }}
                    colors={['royalblue', 'lightsteelblue', 'pink', 'orange', 'salmon', 'tomato']}
                    borderWidth={1}
                    borderColor={{ from: 'color', modifiers: [['darker', 2]] }}
                    borderRadius={2}
                    axisBottom={axisBottom}
                    axisLeft={axisLeft}
                    labelSkipHeight={15}
                    labelTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
                    legends={[legendVertical]}
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                />
            }, {
                key: "bar2",
                name: "Bar horizontal type:",
                element: <Bar
                    data={bardata}
                    keys={bardataKeys}
                    width={500}
                    height={300}
                    indexBy="country"
                    groupMode="stacked"
                    margin={{ top: 20, right: 100, bottom: 60, left: 50 }}
                    padding={0.3}
                    layout="horizontal"
                    reverse={false}
                    colors={{ scheme: 'green_blue' }}
                    borderWidth={0.5}
                    borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                    axisBottom={axisBottom}
                    axisLeft={axisLeft}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                    legends={[legendHorizontal]}
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                    theme={themeHorizontal}
                />
            }]}
        />
    )
};

const themeHorizontal = {
    background: "rgba(0,0,0,0.5)",
    axis: {
        fontSize: "14px",
        tickColor: "white",
        ticks: {
            line: {
                stroke: "#555555"
            },
            text: {
                fill: "#ffffff"
            }
        },
        legend: {
            text: {
                fill: "#ffffff"
            }
        }
    },
    grid: {
        line: {
            stroke: "#555555"
        }
    }
};

const axisBottom = {
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: 'food',
    legendPosition: 'middle',
    legendOffset: 32
}

const axisLeft = {
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: 'country',
    legendPosition: 'middle',
    legendOffset: -40
}

const legendVertical = {
    dataFrom: 'keys',
    anchor: 'bottom',
    direction: 'row',
    translateX: 0,
    translateY: 60,
    itemWidth: 50,
    itemHeight: 20,
    itemDirection: 'top-to-bottom',
    itemOpacity: 0.8,
    symbolShape: "circle",
    symbolSize: 22,
    effects: [{
        on: 'hover',
        style: {
            itemOpacity: 1
        }
    }]
}

const legendHorizontal = {
    dataFrom: 'keys',
    anchor: 'bottom-right',
    direction: 'column',
    justify: false,
    translateX: 120,
    translateY: 0,
    itemsSpacing: 2,
    itemWidth: 100,
    itemHeight: 20,
    itemDirection: 'left-to-right',
    itemTextColor: "white",
    itemOpacity: 0.85,
    symbolSize: 20,
    effects: [
        {
            on: 'hover',
            style: {
                itemOpacity: 1
            }
        }
    ]
}

/* Bar ||other options|| or default:
  * indexBy="id"
  * keys=["value"]
  * groupMode="stacked" ||"grouped"||
  * layout="vertical" ||"horizontal"||
  * reverse=false ||true||
  * minValue="auto" ||from 0 to -1000||
  * maxValue="auto" ||from 0 to 1000||
  * padding=0.1 ||from 0 to 0.9||
  * innerPadding=0 ||from 0 to 10 (px)||
  * width-not required, if used > exclude left/right axes
  * height-not required, if used > exclude left/right axes
  * pixelRatio="Depends on device"
  * margin={top: 50, right: 130, bottom: 50, left: 60}
  * colors="nivo" ||"category10"/"accent"/"dark2"/"paired"/"pastel1"/"pastel2"/"set1"/"set2"/"set3"/
    "brown_blueGreen"/"purpleRed_green"/"pink_yellowGreen"/"purple_orange"/"red_blue"/"red_grey"/"red_yellow_blue"/"red_yellow_green"/"spectral"/
    "blues"/"greens"/"greys"/"oranges"/"purples"/"reds"/"blue_green"/"blue_purple"/"green_blue"/"orange_red"/"purple_blue_green"/"purple_blue"/
    "purple_red"/"red_purple"/"yellow_green_blue"/"yellow_green"/"yellow_orange_brown"/"yellow_orange_red"||
  * colorBy="id" ||"index"||
  * borderRadius=0 ||from 0 to 36 (px)||
  * borderWidth=0 ||from 0 to 20 (px)||
  * borderColor={from:"color"  ||,modifiers: [ [ 'brighter', '0.9' ] ]/[ [ 'darker', '0.9' ] ]/[ [ 'opacity', '0.9' ] (from 0 to 2) ]|| }
  * defs(for patterns and gradients)=object[]
  * fill(rules to apply patterns and gradients)=object[]
  * layers(order of layers)=['grid', 'axes', 'bars', 'markers', 'legends', 'annotations']
  * enableLabel=true
  * label(how bar labels are computed)="value"
  * labelFormat(optional for labels format)
  * labelSkipWidth=0 ||from 0 to 36 (px)||
  * labelSkipHeight=0 ||from 0 to 36 (px)||
  * labelTextColor="theme" ||{from: 'color', modifiers: [ [ 'darker', 1.6 ] ] (same as borderColor)/theme: ('background'/'labels.text.fill'/'grid.line.stroke')}/"black"||
  * enableGridX=false ||true||
  * gridXValues(values to use for vertical grid lines)
  * enableGridY=true ||false||
  * gridYValues(values to use for horizontal grid lines)
  * axisTop ||{ tickSize: 13(from 0 to 20px), tickPadding: 6(from 0 to 20px), tickRotation: -14(from -90 to 90grades), legend: string, legendOffset: -19 (from -60 to 60px)}||
  * axisRight ||{ tickSize: 13(from 0 to 20px), tickPadding: 6(from 0 to 20px), tickRotation: -14(from -90 to 90grades), legend: string, legendOffset: -19 (from -60 to 60px)}||
  * axisBottom ||{ tickSize: 13(from 0 to 20px), tickPadding: 6(from 0 to 20px), tickRotation: -14(from -90 to 90grades), legend: string, legendOffset: -19 (from -60 to 60px)}||
  * axisLeft ||{ tickSize: 13(from 0 to 20px), tickPadding: 6(from 0 to 20px), tickRotation: -14(from -90 to 90grades), legend: string, legendOffset: -19 (from -60 to 60px)}||
  * isInteractive=true ||false||
  * tooltip ||{id:string/number, value:number, index:number, indexValue:string/number, color:string, data(datum associated to the current index):object}||
  * onClick ||{id:string/number, value:number, index:number, indexValue:string/number, color:string, data(datum associated to the current index):object}||
  * legend={[{dataFrom: 'keys', anchor: 'bottom-right', direction: 'column', justify: false, translateX: 120, translateY: 0, itemsSpacing: 2, itemWidth: 100,
    itemHeight: 20, itemDirection: 'left-to-right', itemOpacity: 0.85, symbolSize: 20, effects: [{on: 'hover',style: {itemOpacity: 1}}]} ||,{(add other legend)}|| ]}
  * animate=true ||false||
  * motionStiffness=90 (from 0 to 300)
  * motionDamping=15 (from 0 to 40)
*/

export default BarChart;