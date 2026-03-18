"use client";
import React, { useState } from 'react';
import { Modal, Button, Form, FloatingLabel } from 'react-bootstrap';
import Link from 'next/link';
import OnlyFlagPhoneInput from '@/component/common/OnlyFlagPhoneInput';
import AttachmentIcon from '@/component/common/Icons/AttachmentIcon';

const CreateEmployeeModal = ({ show, handleClose }: any) => {
    const [fileSelected, setFileSelected] = useState(false);
  return (
    <Modal show={show} onHide={handleClose} centered className="common-modal lg-modal pt-lg-4 pt-5">
        <Button variant="link" className="btn-close-btn" onClick={handleClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19.5459 17.954C19.7572 18.1653 19.876 18.452 19.876 18.7509C19.876 19.0497 19.7572 19.3364 19.5459 19.5477C19.3346 19.7591 19.0479 19.8778 18.749 19.8778C18.4501 19.8778 18.1635 19.7591 17.9521 19.5477L12 13.5937L6.0459 19.5459C5.83455 19.7572 5.54791 19.8759 5.24902 19.8759C4.95014 19.8759 4.66349 19.7572 4.45215 19.5459C4.2408 19.3345 4.12207 19.0479 4.12207 18.749C4.12207 18.4501 4.2408 18.1635 4.45215 17.9521L10.4062 11.9999L4.45402 6.04586C4.24268 5.83451 4.12395 5.54787 4.12395 5.24898C4.12395 4.9501 4.24268 4.66345 4.45402 4.45211C4.66537 4.24076 4.95201 4.12203 5.2509 4.12203C5.54978 4.12203 5.83643 4.24076 6.04777 4.45211L12 10.4062L17.954 4.45117C18.1654 4.23983 18.452 4.12109 18.7509 4.12109C19.0498 4.12109 19.3364 4.23983 19.5478 4.45117C19.7591 4.66251 19.8778 4.94916 19.8778 5.24804C19.8778 5.54693 19.7591 5.83358 19.5478 6.04492L13.5937 11.9999L19.5459 17.954Z" fill="currentColor" />
            </svg>
        </Button>
        <Modal.Header>
            <Modal.Title>
                <h5 className='m-0'>Create Employee</h5>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className="common-modal-body">
            <div className="row pt-3">
                <div className='col-lg-4 col-md-12 mb-4'>
                    <FloatingLabel controlId="floatingInput" label="Employee Full Name" className="mb-0">
                        <Form.Control type="text" placeholder="Employee Full Name" />
                    </FloatingLabel>
                </div>
                <div className='col-lg-4 col-md-12 mb-4'>
                    <FloatingLabel controlId="floatingInput" label="Position / Job Title" className="mb-0">
                        <Form.Control type="text" placeholder="Position / Job Title" />
                    </FloatingLabel>
                </div>
                <div className='col-lg-4 col-md-12 mb-4'>
                    <FloatingLabel controlId="floatingSelect" label="Department / Structure / Process">
                        <Form.Select aria-label="Department / Structure / Process">
                            <option>Customer Support</option>
                            <option value="1">Customer Support 1</option>
                            <option value="2">Customer Support 2</option>
                            <option value="3">Customer Support 3</option>
                        </Form.Select>
                    </FloatingLabel>
                </div>
                <div className='col-lg-4 col-md-12 mb-4'>
                    <FloatingLabel controlId="floatingInput" label="Years of Experience" className="mb-0">
                        <Form.Control type="text" placeholder="Years of Experience" />
                    </FloatingLabel>
                </div>
                <div className='col-lg-4 col-md-12 mb-4'>
                     <div className="fleg-box position-relative floting-box">
                        <OnlyFlagPhoneInput label="Contact number" />
                    </div>
                </div>
                <div className='col-lg-4 col-md-12 mb-4'>
                    <FloatingLabel controlId="floatingInput" label="Email" className="mb-0">
                        <Form.Control type="text" placeholder="Email" />
                    </FloatingLabel>
                </div>
                <div className='col-lg-4 col-md-12 mb-4'>
                    <div className='row'>
                        <div className='col-md-12 mb-4'>
                            <FloatingLabel controlId="floatingInput" label="CV Affiliation No." className="mb-0">
                                <Form.Control type="text" placeholder="CV Affiliation No." />
                            </FloatingLabel>
                        </div>
                        <div className='col-md-12 mb-0'>
                           <div className="checkbox-box">
                                <Form.Group className="form-group checkbox">
                                    <Form.Check aria-label="option 1" label="CNAS Affiliation" checked/>
                                </Form.Group>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-8 col-md-12 mb-4'>
                    <FloatingLabel controlId="floatingTextarea2" label="Job Description" className="mb-0">
                        <Form.Control as="textarea" placeholder="Job Description" style={{ height: '140px' }} />
                    </FloatingLabel>
                </div>
            </div>
        </Modal.Body>

        <Modal.Footer className='justify-content-between'>
            <div className='me-auto footer-file-upload'>
                <div className='d-flex gap-2 flex-column'>
                    <Form.Label className='mb-0'><AttachmentIcon /> Attach Media</Form.Label>
                    <Form.Group controlId="formFile" className="position-relative upload-input-box form-group">
                        <Form.Control type="file" className={fileSelected ? "file-selected" : "w-100 position-relative"} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { const input = e.target as HTMLInputElement; if (input.files && input.files.length > 0) { setFileSelected(true); } }} />
                    </Form.Group>
                </div>
            </div>
            <div className='ms-auto'>
                <button className='btn-outline grey-btn' onClick={handleClose}>
                    Cancel
                </button>
                <button className='btn-outline fill-btn ms-2'>
                    Save Preference
                </button>
            </div>

        </Modal.Footer>

    </Modal>
  )
}

export default CreateEmployeeModal