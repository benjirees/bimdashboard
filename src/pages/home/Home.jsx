import React from 'react'
import Chart from "../../components/chart/Chart"
import MainChartOne from '../../components/chart/MainChartOne'
import MainChartTwo from '../../components/chart/MainChartTwo'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import "./home.css"
import {beforeAiData} from "../../dummyDataBeforeAi"
import {data} from "../../dummyDataAfterAi"
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo />
            <MainChartOne data={beforeAiData} title="Before Ai" grid dataKey="pv"/>
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}