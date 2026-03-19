import FileUploadItem from '@/component/common/FileUploadItem'
import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'

const SustainabilityESGStups = () => {
  return (
    <div className='row pt-2'>
        <div className='col-12 mb-2'>
            <div className="d-flex gap-3 align-items-center mb-2">
                <span className="fs-14 d-flex gap-2 align-items-center">
                    File Upload
                </span>
                <hr className="flex-grow-1"></hr>
            </div>
        </div>
        <div className='col-12 mb-4'>
            <div className="upload-file-sec">
                <FileUploadItem title="Environmental Impact Policy" required />
                <FileUploadItem title="Social Responsibility Policy" required/>
                <FileUploadItem title="Green Procurement Targets" required/>
            </div>
        </div>
        <div className='col-12 mb-4'>
            <FloatingLabel controlId="floatingSelect" label="Carbon Footprint Tracking">
                <Form.Select aria-label="Carbon Footprint Tracking">
                    <option>Yes</option>
                    <option value="1">No</option>
                </Form.Select>
            </FloatingLabel>
        </div>
        <div className='col-md-12 mb-4'>
            <FloatingLabel controlId="floatingTextarea2" label="Green Procurement Targets" className="mb-0">
                <Form.Control as="textarea" placeholder="Green Procurement Targets" style={{ height: '100px' }} />
            </FloatingLabel>
        </div>
        <div className='col-md-12 mb-4'>
            <FloatingLabel controlId="floatingTextarea2" label="Labor Standards Compliance" className="mb-0">
                <Form.Control as="textarea" placeholder="Labor Standards Compliance" style={{ height: '100px' }} />
            </FloatingLabel>
        </div>
        <div className='col-md-12 mb-4'>
            <FloatingLabel controlId="floatingTextarea2" label="Other Sustainability Initiatives" className="mb-0">
                <Form.Control as="textarea" placeholder="Other Sustainability Initiatives" style={{ height: '100px' }} />
            </FloatingLabel>
        </div>
    </div>
  )
}

export default SustainabilityESGStups