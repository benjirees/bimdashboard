import React from 'react';
import './pieChartThree.css';
import { VictoryPie } from 'victory-pie';

const myData = [
    { x: "Group A", y: 900 },
    { x: "Group B", y: 400 },
    { x: "Group C", y: 300 },
];

function PieChartThree() {
  return (
    <div className='victory-pie'>
        <VictoryPie
            data={myData}
            colorScale={["lightblue", "gray", "orange"]}
            radius={50}
        />
    </div>
  )
}

export default PieChartThree