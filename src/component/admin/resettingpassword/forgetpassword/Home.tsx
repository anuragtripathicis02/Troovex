'use client'
import React from 'react'
import ForgetPassword from './ForgetPassword'
import Header from '@/component/common/Header'

const Home = () => {
    return (
        <>
            <Header />
            <div className='mt-82'>
                <ForgetPassword />
            </div>
        </>
    )
}

export default Home
