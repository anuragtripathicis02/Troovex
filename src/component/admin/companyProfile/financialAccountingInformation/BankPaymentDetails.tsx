import OnlyFlagPhoneInput from '@/component/common/OnlyFlagPhoneInput'
import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'

const BankPaymentDetails = () => {
    return (
        <div className='row pt-4'>
            <div className='col-xxl-4 col-md-6 mb-4'>
                <FloatingLabel controlId="floatingInput" label="Bank Name" className="mb-3 ">
                    <Form.Control type="text" placeholder="2025-2026" />
                </FloatingLabel>
            </div>
            <div className='col-xxl-4 col-md-6 mb-4'>
                <FloatingLabel controlId="floatingInput" label="Bank Branch" className="mb-3 ">
                    <Form.Control type="text" placeholder="IFRS" />
                </FloatingLabel>
            </div>
            <div className='col-xxl-4 col-md-6 mb-4'>
                <FloatingLabel controlId="floatingInput" label="Bank Account Number" className="mb-3 ">
                    <Form.Control type="text" placeholder="Commercial" />
                </FloatingLabel>
            </div>
            <div className='col-xxl-4 col-md-6 mb-4'>
                <FloatingLabel controlId="floatingSelect" label="Account Currency">
                    <Form.Select aria-label="Account Currency">
                        <option>Commercial</option>
                        <option value="1">Commercial 1</option>
                        <option value="2">Commercial 2</option>
                        <option value="3">Commercial 3</option>
                    </Form.Select>
                </FloatingLabel>
            </div>
            <div className='col-xxl-4 col-md-6 mb-4'>
                <FloatingLabel controlId="floatingSelect" label="Account Currency">
                    <Form.Select aria-label="Account Currency">
                        <option>Commercial</option>
                        <option value="1">Commercial 1</option>
                        <option value="2">Commercial 2</option>
                        <option value="3">Commercial 3</option>
                    </Form.Select>
                </FloatingLabel>
            </div>
            <div className='col-xxl-4 col-md-6 mb-4'>
                <div className="fleg-box position-relative floting-box">
                    <OnlyFlagPhoneInput label='Bank Contact' />
                </div>
            </div>
            <div className='col-md-12 mb-4'>
                <FloatingLabel controlId="floatingInput" label="Bank Address" className="mb-3 ">
                    <Form.Control type="text" placeholder="Plot 12, Logistics Park, Hamburg 21035" />
                </FloatingLabel>
            </div>

        </div>
    )
}

export default BankPaymentDetails