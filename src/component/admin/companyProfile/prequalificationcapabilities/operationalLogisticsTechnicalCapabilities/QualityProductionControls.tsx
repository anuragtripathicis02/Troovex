import FileUploadList from '@/component/common/FileUploadList'
import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'

const QualityProductionControls = () => {
  return (
    <div className='row pt-2'>
        <div className='col-md-12 mb-4'>
             <FloatingLabel controlId="floatingTextarea2" label="Quality Control / Assurance Processes" className="mb-0">
                <Form.Control as="textarea" placeholder="Quality Control / Assurance Processes" style={{ height: '120px' }} />
            </FloatingLabel>
        </div>
        <div className='col-md-12 mb-4'>
             <FloatingLabel controlId="floatingTextarea2" label="Inspection / Testing Capabilities" className="mb-0">
                <Form.Control as="textarea" placeholder="Inspection / Testing Capabilities" style={{ height: '120px' }} />
            </FloatingLabel>
        </div>
        <div className='col-12 mb-2'>
            <div className="d-flex gap-3 align-items-center mb-2">
                <span className="fs-14 d-flex gap-2 align-items-center">
                    Production Standards / Certifications
                </span>
                <hr className="flex-grow-1"></hr>
            </div>
        </div>
        <div className='col-md-12 mb-4'>
            <div className="list-card-box d-flex align-items-center gap-0 mb-2 justify-content-between flex-wrap">
                <FileUploadList title="ISO standards" required />
            </div>
            <div className="list-card-box d-flex align-items-center gap-0 justify-content-between flex-wrap">
                <FileUploadList title="Industry-specific standards" required />
            </div>
        </div>
    </div>
  )
}

export default QualityProductionControls