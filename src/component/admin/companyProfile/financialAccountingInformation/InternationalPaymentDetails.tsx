import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'

const InternationalPaymentDetails = () => {
    return (
        <div className='row pt-3'>
            <div className='col-xxl-4 col-md-6 mb-4'>
                <FloatingLabel controlId="floatingInput" label="CH / Wire Contact Name" className="">
                    <Form.Control type="text" placeholder="2025-2026" />
                </FloatingLabel>
            </div>
            <div className='col-xxl-4 col-md-6 mb-4'>
                <FloatingLabel controlId="floatingInput" label="ACH / Wire Contact Phone" className="">
                    <Form.Control type="text" placeholder="IFRS" />
                </FloatingLabel>
            </div>
            <div className='col-xxl-4 col-md-6 mb-4'>
                <FloatingLabel controlId="floatingInput" label="Tax ID / VAT Number" className="">
                    <Form.Control type="text" placeholder="Commercial" />
                </FloatingLabel>
            </div>
            <div className='col-xxl-4 col-md-6 mb-4'>
                <FloatingLabel controlId="floatingInput" label="IBAN" className="">
                    <Form.Control type="text" placeholder="Commercial" />
                </FloatingLabel>
            </div>
            <div className='col-xxl-4 col-md-6 mb-4'>
                <FloatingLabel controlId="floatingInput" label="SWIFT" className="">
                    <Form.Control type="text" placeholder="Commercial" />
                </FloatingLabel>
            </div>
        </div>
    )
}

export default InternationalPaymentDetails