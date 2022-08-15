import React from 'react';
import { VictoryPie } from 'victory-pie';
import Chart from './Chart';
import './pieChartTwo.css';

const myData = [
    { x: "Group A", y: 900 },
    { x: "Group B", y: 400 },
    { x: "Group C", y: 300 },
];

const myData2 = [
    { x: "Group A", y: 500 },
    { x: "Group B", y: 700 },
    { x: "Group C", y: 200 },
];

const myData3 = [
    { x: "Group A", y: 100 },
    { x: "Group B", y: 800 },
    { x: "Group C", y: 300 },
];

const myData4 = [
    { x: "Group A", y: 400 },
    { x: "Group B", y: 600 },
    { x: "Group C", y: 800 },
];

const myData5 = [
    { x: "Group A", y: 200 },
    { x: "Group B", y: 900 },
    { x: "Group C", y: 800 },
];

class PieChartTwo extends React.Component {
    render () {
        return (
            <div>

                <div className='pieCharts'>
                    <div className='pieChart1'>
                        <VictoryPie
                            data={myData}
                            colorScale={["lightblue", "gray", "orange"]}
                            radius={75}
                        />
                    </div>
                    
                    <div className='pieChart2'>
                        <VictoryPie
                            data={myData2}
                            colorScale={["lightblue", "gray", "orange"]}
                            radius={75}
                        />
                    </div>
                    
                    <div className='pieChart3'>
                        <VictoryPie
                            data={myData3}
                            colorScale={["lightblue", "gray", "orange"]}
                            radius={75}
                        />
                    </div>
                    
                    <div className='pieChart4'>
                        <VictoryPie
                            data={myData4}
                            colorScale={["lightblue", "gray", "orange"]}
                            radius={75}
                        />
                    </div>

                    <div className='pieChart5'>
                        <VictoryPie
                            data={myData5}
                            colorScale={["lightblue", "gray", "orange"]}
                            radius={75}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default PieChartTwo