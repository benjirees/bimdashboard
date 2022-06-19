import React from 'react'
import Chart from "../../components/chart/Chart"
import MainChartOne from '../../components/chart/MainChartOne'
import MainChartTwo from '../../components/chart/MainChartTwo'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import "./home.css"
import {beforeAiData} from "../../dummyDataBeforeAi"
import {data} from "../../dummyDataAfterAi"

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo />
            <MainChartOne data={beforeAiData} title="Before Ai" grid dataKey="pv"/>
            <MainChartTwo data={data} title="After Ai" grid dataKey="pv"/>

        </div>
    )
}