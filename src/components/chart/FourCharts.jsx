import React from 'react';
import FeaturedInfo from '../featuredInfo/FeaturedInfo';
import Chart from './Chart.jsx';
import ChartTwo from './ChartTwo';
import PieChart from './PieChart'
import './fourCharts.css';
import MainChartOne from './MainChartOne';
import PieChartThree from './PieChartThree';

function FourCharts() {
  return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Quantity of Materials Used</span>
                <Chart />
                <div className="featuredGraphContainer">
                        <span className="featuredGraph"><Chart /></span>
                </div>

                <span className="featuredSub">Compared to last iteration</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Conformance Compared to Requirements</span>
                <ChartTwo />
                <div className="featuredGraphContainer">
                    <span className="featuredGraph"><ChartTwo /></span>

                </div>
                <span className="featuredSub">Compared to last iteration</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Issues</span>

                <div className='piecharting'>
                    <PieChartThree />
                </div>

                <div className="featuredGraphContainer">
                    <span className="featuredGraph"></span>

                </div>
                <span className="featuredSub">Compared to last iteration</span>
            </div>
        </div>
  )
}

export default FourCharts