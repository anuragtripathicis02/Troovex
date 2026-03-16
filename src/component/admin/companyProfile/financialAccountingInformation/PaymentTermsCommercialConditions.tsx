import AttachmentIcon from '@/component/common/Icons/AttachmentIcon'
import React, { useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import { TagInput } from 'rsuite'

const PaymentTermsCommercialConditions = () => {
    const [fileSelected, setFileSelected] = useState(false);
    return (
        <div className='row pt-3'>
            <div className='col-md-12 mb-4'>
                <FloatingLabel controlId="floatingSelect" label="Standard Payment Terms">
                    <Form.Select aria-label="Standard Payment Terms">
                        <option>Net 15</option>
                        <option value="1">Net 15 1</option>
                        <option value="2">Net 15 2</option>
                        <option value="3">Net 15 3</option>
                    </Form.Select>
                </FloatingLabel>
            </div>
            <div className='col-md-12 mb-4'>
                <FloatingLabel controlId="floatingTextarea2" label="Payment Terms (Company Policy)" className="">
                    <Form.Control as="textarea" placeholder="Payment Terms (Company Policy)" style={{ height: '100px' }} />
                </FloatingLabel>
            </div>
            <div className='col-md-12 mb-3'>
                <div className="multipal-select-sec mb-2 position-relative floting-box">
                    <Form.Label>User Departments Using Procurement</Form.Label>
                    <TagInput defaultValue={["Fixed price", "Time & materials", "Unit-based pricing", "Subscription"]}
                        trigger={['Enter', 'Space', 'Comma']}
                        placeholder="Core Activities"
                        className="w-100 form-group"
                    />
                </div>
            </div>
            <div className='col-md-12 mb-4'>
                <FloatingLabel controlId="floatingTextarea2" label="Discounts & Early Payment Terms" className="">
                    <Form.Control as="textarea" placeholder="Discounts & Early Payment Terms" style={{ height: '100px' }} />
                </FloatingLabel>
            </div>
            <div className='col-md-12 mb-4'>
                <div className='me-auto footer-file-upload'>
                    <div className='d-flex gap-2 flex-column blue-text-file'>
                        <Form.Label className='mb-0'><AttachmentIcon /> Attach Media</Form.Label>
                        <Form.Group controlId="formFile" className="position-relative upload-input-box form-group">
                            <Form.Control type="file" className={fileSelected ? "file-selected" : "w-100 position-relative"} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { const input = e.target as HTMLInputElement; if (input.files && input.files.length > 0) { setFileSelected(true); } }} />
                        </Form.Group>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentTermsCommercialConditions