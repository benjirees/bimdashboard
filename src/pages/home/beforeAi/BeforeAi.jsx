import React from 'react'
import Chart from '../../../components/chart/Chart'
import FourCharts from '../../../components/chart/FourCharts'
import PieChartTwo from '../../../components/chart/PieChartTwo'
import './beforeAi.css'

export default function BeforeAi() {

  return (
      <div className="beforeAi">
        <div className='title'>
          <h1>Issues</h1>
        </div>
        <div className="pieCharts">
          <PieChartTwo />   
        </div>
        <div className='fourCh'>
          <FourCharts />
        </div>
      </div>
  )
}
