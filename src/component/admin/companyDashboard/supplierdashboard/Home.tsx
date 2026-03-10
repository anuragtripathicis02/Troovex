'use client'
import BackArrow from '@/component/common/Icons/BackArrow';
import DashboardHeader from '@/component/common/DashboardHeader'
import Sidebar from '@/component/common/Sidebar'
import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const Home = () => {
  return (
    <>
      <DashboardHeader />
      <Sidebar />
      <div className='content-wrapper mt-82'>
        <div className='page-title'>
          <div className='d-flex align-items-center gap-2'>
            <BackArrow />
            <div className='page-title-right'>
              <h5 className='mb-0'>Complete Profile</h5>
              <Breadcrumb className='m-0'>
                <Breadcrumb.Item href="">Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item href="">
                  Organization Profile
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Legal & Corporate Identity</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
        </div>
        <div className='container'>
          <p>What is Lorem Ipsum?</p>
        </div>
      </div>
    </>
  )
}

export default Home
