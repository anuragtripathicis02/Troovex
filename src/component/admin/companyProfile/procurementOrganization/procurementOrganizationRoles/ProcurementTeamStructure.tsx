"use client";
import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import { TagInput } from 'rsuite';

const ProcurementTeamStructure = () => {
    return (
        <div className='row'>
            <div className='col-xxl-4 col-lg-6 col-md-12'>
                <FloatingLabel controlId="floatingInput" label={<>Procurement Manager(s)</>} className="mb-4">
                    <Form.Control type="text" placeholder="Procurement Manager(s)" />
                </FloatingLabel>
            </div>
            <div className='col-xxl-4 col-lg-6 col-md-12'>
                <FloatingLabel controlId="floatingInput" label={<>Buyers / Purchasing Officers</>} className="mb-4">
                    <Form.Control type="text" placeholder="Buyers / Purchasing Officers" />
                </FloatingLabel>
            </div>
            <div className='col-xxl-4 col-lg-12 col-md-12'>
                <FloatingLabel controlId="floatingInput" label={<>Technical Approval Authority</>} className="mb-4">
                    <Form.Control type="text" placeholder="Technical Approval Authority" />
                </FloatingLabel>
            </div>
            <div className='col-xxl-4 col-lg-12 col-md-12'>
                <FloatingLabel controlId="floatingInput" label={<>Financial Approval Authority</>} className="mb-4">
                    <Form.Control type="text" placeholder="Financial Approval Authority" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label={<>Contract Manager</>} className="mb-4">
                    <Form.Control type="text" placeholder="Contract Manager" />
                </FloatingLabel>
            </div>
            <div className='col-xxl-8 col-lg-12 col-md-12'>
                <div className="multipal-select-sec mb-2 position-relative floting-box ">
                    <Form.Label>Products / Services Covered</Form.Label>
                    <TagInput defaultValue={["Consultation", "Order without consultation", "Restricted consultation", "Direct consultation", "Prequalification", "Selective consultation", "Competition", "Single-source procurement (Gré à gré)"]}
                        trigger={['Enter', 'Space', 'Comma']}
                        placeholder="Core Activities"
                        className="w-100 form-group "
                    />
                </div>
            </div>
        </div>
    )
}

export default ProcurementTeamStructure
