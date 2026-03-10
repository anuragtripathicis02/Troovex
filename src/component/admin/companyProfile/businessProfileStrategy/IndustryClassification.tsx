"use client";

import Link from 'next/link';
import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'

import { DatePicker, TagInput } from 'rsuite';


const IndustryClassification = () => {
  return (
    <div className='row'>
        <div className='col-md-12'>
            <div className="multipal-select-sec mb-4 position-relative floting-box">
                <Form.Label>Company Domain</Form.Label>
                <TagInput trigger={['Enter', 'Space', 'Comma']} placeholder="Company Domain" onCreate={(value, item) => { console.log(value, item); }} className="w-100 form-group" />
            </div>
        </div>
        <div className='col-md-12 mb-3'>
            <FloatingLabel controlId="floatingSelect" label="Sub-Sector">
            <Form.Select aria-label="Floating label select example">
                <option>LLC</option>
                <option value="1">LLC 1</option>
                <option value="2">LLC 2</option>
                <option value="3">LLC 3</option>
            </Form.Select>
            </FloatingLabel>
        </div>
    </div>
  )
}

export default IndustryClassification