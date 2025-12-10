"use client";
import BackArrow from '@/component/common/BackArrow';
import Link from 'next/link';
import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import ResetLinkSentModal from '../../modalComponent/ResetLinkSentModal';

const ForgetPassword = () => {
  // SM Modal 

    const [showFilterResetLinkModal, setShowFilterResetLinkModal] = useState(false);
    const handleFilterResetLinkModal = () => {
        setShowFilterResetLinkModal(true);
    };
    const handleCloseAll = () => {
        setShowFilterResetLinkModal(false);
    };

    return (
        <div className='mt-82'>
            <div className='resetting-Password'>
                <div className='container'>
                    <Link href="" className='back-link'>
                        <BackArrow />
                    </Link>

                    <div className='card-800 text-center'>
                        <div className='head-box text-center mt-32 mb-48'>
                            <h2>Forget Your Password?</h2>
                            <p className='mb-0'>Lost  your password? No stress. Just drop your email below and we’ll send you a link to reset your password and get you back in.</p>
                        </div>
                        <div className='col-md-6 mx-auto'>
                            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-48 label-gray">
                                <Form.Control type="text" placeholder="name@example.com" />
                            </FloatingLabel>
                        </div>
                        <button className='btn-outline fill-btn' onClick={handleFilterResetLinkModal}>Get Reset Link</button>
                    </div>
                </div>
            </div>
            <ResetLinkSentModal show={showFilterResetLinkModal} handleClose={handleCloseAll}/>
        </div>
    )
}

export default ForgetPassword
