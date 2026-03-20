import React, { useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import { TagInput } from 'rsuite'

const QualityProductionControls = () => {

  return (
    <div className="row pt-3">
        <div className='col-lg-4 col-md-12 mb-4'>
            <FloatingLabel controlId="floatingSelect" label="Procurement Model">
                <Form.Select aria-label="Procurement Model">
                    <option>Centralized</option>
                    <option value="1">Centralized 1</option>
                    <option value="2">Centralized 2</option>
                    <option value="3">Centralized 3</option>
                </Form.Select>
            </FloatingLabel>
        </div>
        <div className='col-lg-8 col-md-12 mb-4'>
            <FloatingLabel controlId="floatingInput" label="Estimated Annual Procurement Volume" className="mb-0">
                <Form.Control type="text" placeholder="Estimated Annual Procurement Volume" />
            </FloatingLabel>
        </div>
        <div className='col-lg-4 col-md-12 mb-4'>
            <FloatingLabel controlId="floatingInput" label="Number of Active Suppliers" className="mb-0">
                <Form.Control type="text" placeholder="Number of Active Suppliers" />
            </FloatingLabel>
        </div>
        <div className='col-lg-4 col-md-12 mb-4'>
            <FloatingLabel controlId="floatingInput" label="Average RFQs per Month" className="mb-0">
                <Form.Control type="text" placeholder="Average RFQs per Month" />
            </FloatingLabel>
        </div>
        <div className='col-lg-4 col-md-12 mb-4'>
            <FloatingLabel controlId="floatingInput" label="Average Contracts per Year" className="mb-0">
                <Form.Control type="text" placeholder="Average Contracts per Year" />
            </FloatingLabel>
        </div>
        <div className='col-lg-6 col-md-12 mb-4'>
            <div className="multipal-select-sec mb-0 position-relative floting-box">
                <Form.Label>User Departments Using Procurement</Form.Label>
                <TagInput defaultValue={["Goods", "Services", "Work"]}
                    trigger={['Enter', 'Space', 'Comma']}
                    placeholder="Core Activities"
                    className="w-100 form-group"
                />
            </div>
        </div>
        <div className='col-lg-6 col-md-12 mb-4'>
            <div className="multipal-select-sec mb-0 position-relative floting-box">
                <Form.Label>User Departments Using Procurement</Form.Label>
                <TagInput defaultValue={["Goods", "Services", "Work"]}
                    trigger={['Enter', 'Space', 'Comma']}
                    placeholder="Core Activities"
                    className="w-100 form-group"
                />
            </div>
        </div>
        <div className='col-lg-4 col-md-12 mb-4'>
            <FloatingLabel controlId="floatingInput" label="Procurement Cycle Time" className="mb-0">
                <Form.Control type="text" placeholder="Procurement Cycle Time" />
            </FloatingLabel>
        </div>
        <div className='col-lg-4 col-md-12 mb-4 member-list-add-card'>
            <FloatingLabel controlId="floatingInput" label="Manual Procurement" className="mb-0 position-relative">
                <Form.Control type="number" className='pe-5' placeholder="Manual Procurement"/>
                <span className='percent-static'>%</span>
            </FloatingLabel>
        </div>
        <div className='col-lg-4 col-md-12 mb-4 member-list-add-card'>
            <FloatingLabel controlId="floatingInput" label="Digital Procurement" className="mb-0 position-relative">
                <Form.Control type="number" className='pe-5' placeholder="Digital Procurement"/>
                <span className='percent-static'>%</span>
            </FloatingLabel>
        </div>
        <div className='col-lg-4 col-md-12 mb-4'>
            <FloatingLabel controlId="floatingSelect" label="ERP / Accounting System Available">
                <Form.Select aria-label="ERP / Accounting System Available">
                    <option>Yes (Available)</option>
                    <option value="1">Not (Available)</option>
                </Form.Select>
            </FloatingLabel>
        </div>
        <div className='col-lg-8 col-md-12 mb-4'>
            <FloatingLabel controlId="floatingInput" label="ERP / Accounting System Name" className="mb-0">
                <Form.Control type="text" placeholder="ERP / Accounting System Name" />
            </FloatingLabel>
        </div>
        <div className='col-md-12 mb-4'>
            <FloatingLabel controlId="floatingTextarea2" label="Current Procurement Pain Points" className="mb-0">
            <Form.Control as="textarea" placeholder="Current Procurement Pain Points" style={{ height: '120px' }} />
            </FloatingLabel>
        </div>
        <div className='col-md-12 mb-4'>
            <div className="multipal-select-sec mb-0 position-relative floting-box">
                <Form.Label>Procurement KPIs Used</Form.Label>
                <TagInput defaultValue={["Goods", "Services", "Work"]}
                    trigger={['Enter', 'Space', 'Comma']}
                    placeholder="Core Activities"
                    className="w-100 form-group"
                />
            </div>
        </div>

    </div>
  )
}

export default QualityProductionControls