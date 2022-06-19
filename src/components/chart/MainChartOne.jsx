import React, { Component } from 'react'

import "./MainChartOne.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import BeforeButton from '../button/BeforeButton';


export default function MainChartOne({title, data, dataKey, grid}) {

    return (
        <div className="chart">
            <h2>Before AI</h2> 
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="gray"/>
                    <Line type="monotone" dataKey={dataKey} stroke="gray"/>
                    <Tooltip />
                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}