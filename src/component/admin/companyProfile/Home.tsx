import DashboardHeader from '@/component/common/DashboardHeader'
import Sidebar from '@/component/common/Sidebar'
import React from 'react'
import CompanyProfileTabs from './CompanyProfileTabs'

const Home = () => {
  return (
    <>
        <DashboardHeader/>
        <Sidebar/>
        <div className='content-wrapper mt-82'>
            <div className='container'>
                <CompanyProfileTabs />
            </div>
        </div>

    </>
  )
}

export default Home
