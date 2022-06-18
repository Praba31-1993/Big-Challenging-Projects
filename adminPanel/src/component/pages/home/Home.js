// className="sidebar"

import React from 'react'
import Chart from '../../chart/Chart'
import FeaturedInfo from '../../featuredInfo/FeaturedInfo'
import './Home.css'
import { userData } from '../../DummyData'
import WidgetLm from '../../widgetLm/WidgetLm'
import WidgetSm from '../../widgetSm/WidgetSm'

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo/>
      <Chart data={userData} title="User Analytics" grid dataKey="ActiveUsers"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLm/>
      </div>
    </div>
  )
}
