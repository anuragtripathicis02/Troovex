import Header from '@/component/common/Header'
import React from 'react'
import CompanyBothScreen from './CompanyBothScreen'


const Home = () => {
  return (
    <div>
      <Header />
      <div className='mt-82'>
        <CompanyBothScreen />
      </div>
    </div>
  )
}

export default Home