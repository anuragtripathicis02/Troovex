import DashboardHeader from '@/component/common/DashboardHeader'
import Sidebar from '@/component/common/Sidebar'
import React from 'react'
import CreatingTenderTabs from './CreatingTenderTabs'

const Home = () => {
  return (
    <>
        <DashboardHeader/>
        <Sidebar/>
        <div className='content-wrapper mt-82'>
            <div className='container'>
                <CreatingTenderTabs />
            </div>
        </div>

    </>
  )
}

export default Home
