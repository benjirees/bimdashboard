import React from 'react'
import PieChartTwo from '../../../components/chart/PieChartTwo'
import './beforeAi.css'

export default function BeforeAi() {

  return (
    <div className="beforeAi">

      <div className="pieCharts">
        <div className="chart">
          <PieChartTwo />
        </div>
        <div className="chart">
          <PieChartTwo />
        </div>
        <div className="chart">
          <PieChartTwo />
        </div>
        <div className="chart">
          <PieChartTwo />
        </div>
        <div className="chart">
          <PieChartTwo />
        </div>
        <div className="chart">
          <PieChartTwo />
        </div>
      </div>
          
    </div>
  )
}
