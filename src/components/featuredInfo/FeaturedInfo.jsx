import React from 'react'
import Chart from '../chart/Chart'
import ChartTwo from '../chart/ChartTwo'
import PieChart from '../chart/PieChart'
import "./featuredInfo.css"

export default function FeaturedInfo() {

    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Before AI</span>
                <Chart />
                <div className="featuredGraphContainer">
                        <span className="featuredGraph"><Chart /></span>
                </div>

                <span className="featuredSub">Compared to last iteration</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">After AI</span>
                <ChartTwo />
                <div className="featuredGraphContainer">
                    <span className="featuredGraph"><ChartTwo /></span>

                </div>
                <span className="featuredSub">Compared to last iteration</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Issues</span>
                <PieChart />
                <div className="featuredGraphContainer">
                    <span className="featuredGraph"></span>

                </div>
                <span className="featuredSub">Compared to last iteration</span>
            </div>
        </div>
    )
}