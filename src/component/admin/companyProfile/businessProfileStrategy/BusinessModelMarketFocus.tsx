"use client";

import Link from 'next/link';
import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'

import { DatePicker, TagInput } from 'rsuite';


const BusinessModelMarketFocus = () => {
  return (
    <div className='row'>
        <div className='col-md-6'>
            <div className="multipal-select-sec mb-4 position-relative floting-box">
                <Form.Label>Business Model</Form.Label>
                <TagInput trigger={['Enter', 'Space', 'Comma']} placeholder="Business Model" onCreate={(value, item) => { console.log(value, item); }} className="w-100 form-group" />
            </div>
        </div>
        <div className='col-md-6'>
            <div className="multipal-select-sec mb-3 position-relative floting-box">
                <Form.Label>Target Markets</Form.Label>
                <TagInput trigger={['Enter', 'Space', 'Comma']} placeholder="Target Markets" onCreate={(value, item) => { console.log(value, item); }} className="w-100 form-group" />
            </div>
        </div>
        <div className='col-md-12'>
            <FloatingLabel controlId="floatingTextarea2" label="Geographic Coverage" className="mb-3 position-relative">
                <Form.Control as="textarea" placeholder="Geographic Coverage" style={{ height: '100px' }} />
            </FloatingLabel>
        </div>
    </div>
  )
}

export default BusinessModelMarketFocus