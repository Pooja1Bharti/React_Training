import React from 'react'
import BarChart from './Barchart'
import Linechart from './Linechart'
import PieChart from './Piechart'
import Sidebar from './Sidebar'
function Dashboard() {
  return (
   <div>
     <Sidebar/>
     <BarChart />
     <Linechart/>
     <PieChart/>
   </div>
  )
}

export default Dashboard
