import Header from '@/component/common/Header'
import React from 'react'
import RoleSelection from './RoleSelection'

const Home = () => {
  return (
    <div>
      <Header />
      <div className='mt-82'>
        <RoleSelection />
      </div>
    </div>
  )
}

export default Home