"use client";
import BackArrow from '@/component/common/BackArrow';
import Link from 'next/link';
import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const ForgetPassword = () => {
    return (
        <div className='resetting-Password'>
            <div className='container'>
                <Link href="" className='back-link'>
                   <BackArrow/>
                </Link>
                
                <div className='card-800 text-center'>
                    <div className='mb-48'>
                        <h2>Forget Your Password?</h2>
                        <p className='mb-0'>Lost  your password? No stress. Just drop your email below and we’ll send you a link to reset your password and get you back in.</p>
                    </div>
                    <div className='col-md-6 mx-auto'>
                        <FloatingLabel controlId="floatingInput" label="Email address" className="mb-48">
                            <Form.Control type="text" placeholder="name@example.com" />
                        </FloatingLabel>
                    </div>
                    <button className='btn-outline fill-btn'>Get Reset Link</button>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword
