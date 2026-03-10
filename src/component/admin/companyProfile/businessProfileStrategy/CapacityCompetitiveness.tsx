"use client";
import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'



const CapacityCompetitiveness = () => {
  return (
    <div className='row'>
        <div className='col-md-12'>
            <FloatingLabel controlId="floatingTextarea2" label="Capacity Information" className="mb-4 position-relative">
                <Form.Control as="textarea" placeholder="Capacity Information" style={{ height: '80px' }} />
            </FloatingLabel>
        </div>
        <div className='col-md-12'>
            <FloatingLabel controlId="floatingTextarea2" label="Competitive Positioning" className="mb-3 position-relative">
                <Form.Control as="textarea" placeholder="Competitive Positioning" style={{ height: '80px' }} />
            </FloatingLabel>
        </div>
    </div>
  )
}

export default CapacityCompetitiveness