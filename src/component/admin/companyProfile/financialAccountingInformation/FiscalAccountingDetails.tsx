import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'

const FiscalAccountingDetails = () => {
    return (
        <div className='row pt-4'>
            <div className='col-xxl-4 col-md-6 mb-4'>
                <FloatingLabel controlId="floatingSelect" label="Fiscal Year">
                    <Form.Select aria-label="Fiscal Year">
                        <option>2025-2026</option>
                        <option value="1">2026-2027</option>
                        <option value="2">2027-2028</option>
                        <option value="3">2028-2029</option>
                    </Form.Select>
                </FloatingLabel>
            </div>
            <div className='col-xxl-4 col-md-6 mb-4'>
                <FloatingLabel controlId="floatingSelect" label="Accounting Standard Used">
                    <Form.Select aria-label="Accounting Standard Used">
                        <option>IFRS</option>
                        <option value="1">IFRS 1</option>
                        <option value="2">IFRS 2</option>
                        <option value="3">IFRS 3</option>
                    </Form.Select>
                </FloatingLabel>
            </div>
            <div className='col-xxl-4 col-md-6 mb-4'>
                <FloatingLabel controlId="floatingSelect" label="Account Type">
                    <Form.Select aria-label="Account Type">
                        <option>Commercial</option>
                        <option value="1">Commercial 1</option>
                        <option value="2">Commercial 2</option>
                        <option value="3">Commercial 3</option>
                    </Form.Select>
                </FloatingLabel>
            </div>
        </div>
    )
}

export default FiscalAccountingDetails