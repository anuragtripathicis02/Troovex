"use client";
import React from 'react'
import Home from '@/component/admin/onboarding/roleSelection/Home';
import Header from '@/component/common/Header';

const page = () => {
  return (
    <>
    <div className='header'>
      <Header />
    </div>
    <div className='main-content'>
      <Home/>
    </div>
    </>
  )
}

export default page