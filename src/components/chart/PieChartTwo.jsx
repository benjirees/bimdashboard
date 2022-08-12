import React from 'react';
import './pieChartTwo.css';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];

class PieChartTwo extends React.Component {
    render () {
        return (
            <ResponsiveContainer width={225} height={175}>
                <PieChart>
                    <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={25} fill="#8884d8" />
                    <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={30} outerRadius={40} fill="#82ca9d" label />
                </PieChart>
            </ResponsiveContainer>
        )
    }
}

export default PieChartTwo