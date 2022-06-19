import React from 'react'
import './beforeButton.css'
import MainChartOne from '../chart/MainChartOne'

export default function BeforeButton() {
    return (
        <div className="titleButtonDiv">
            <div class="child inline-block-child"><h3 className="chartTitle">Before AI</h3></div>
            <div class="child inline-block-child"><button onClick={<MainChartOne />}>After</button></div>
            {/* <div class="child inline-block-child"><button>Before</button></div> */}
        </div>
    )
}