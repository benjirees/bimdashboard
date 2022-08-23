import React from 'react'
import Chart from '../../../components/chart/Chart'
import FourCharts from '../../../components/chart/FourCharts'
import PieChartTwo from '../../../components/chart/PieChartTwo'
import './beforeAi.css'

export default function BeforeAi() {

  const getIssues = 'https://api-stage.bimplus.net/v2/team_slug/projects/project_id/issues'
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
