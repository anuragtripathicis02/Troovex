import DashboardHeader from '@/component/common/DashboardHeader'
import Sidebar from '@/component/common/Sidebar'
import React from 'react'
import ManagementTabs from './ManagementTabs'
// import CreatingTenderTabs from './CreatingTenderTabs'

const Home = () => {
  return (
    <>
        <DashboardHeader/>
        <Sidebar/>
        <div className='content-wrapper ps-0 pe-0 mt-64 pt-0 header-clc-height-64'>
            <ManagementTabs  />
        </div>

    </>
  )
}

export default Home
