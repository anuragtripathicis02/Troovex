"use client";

import Link from 'next/link';
import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'

import { DatePicker, TagInput } from 'rsuite';


const BusinessActivities = () => {
  return (
    <div className='row'>
        <div className='col-md-12'>
            <div className="multipal-select-sec mb-4 position-relative floting-box">
                <Form.Label>Core Activities<span className="text-danger">*</span></Form.Label>
                <TagInput trigger={['Enter', 'Space', 'Comma']} placeholder="Core Activities" onCreate={(value, item) => { console.log(value, item); }} className="w-100 form-group" />
            </div>
        </div>
        <div className='col-md-12'>
            <div className="multipal-select-sec mb-3 position-relative floting-box">
                <Form.Label>Secondary Activities</Form.Label>
                <TagInput trigger={['Enter', 'Space', 'Comma']} placeholder="Secondary Activities" onCreate={(value, item) => { console.log(value, item); }} className="w-100 form-group" />
            </div>
        </div>
    </div>
  )
}

export default BusinessActivities