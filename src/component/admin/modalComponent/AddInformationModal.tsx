"use client";
import React, { useState } from 'react';
import { Modal, Button, Form, FloatingLabel } from 'react-bootstrap';
import { TagInput } from 'rsuite';


const AddInformationModal  = ({ show, handleClose }: any) => {
      const [fileSelected, setFileSelected] = useState(false);
  return (
    <Modal show={show} onHide={handleClose} centered className="common-modal md-modal pt-lg-4 pt-5">
        <Button variant="link" className="btn-close-btn" onClick={handleClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19.5459 17.954C19.7572 18.1653 19.876 18.452 19.876 18.7509C19.876 19.0497 19.7572 19.3364 19.5459 19.5477C19.3346 19.7591 19.0479 19.8778 18.749 19.8778C18.4501 19.8778 18.1635 19.7591 17.9521 19.5477L12 13.5937L6.0459 19.5459C5.83455 19.7572 5.54791 19.8759 5.24902 19.8759C4.95014 19.8759 4.66349 19.7572 4.45215 19.5459C4.2408 19.3345 4.12207 19.0479 4.12207 18.749C4.12207 18.4501 4.2408 18.1635 4.45215 17.9521L10.4062 11.9999L4.45402 6.04586C4.24268 5.83451 4.12395 5.54787 4.12395 5.24898C4.12395 4.9501 4.24268 4.66345 4.45402 4.45211C4.66537 4.24076 4.95201 4.12203 5.2509 4.12203C5.54978 4.12203 5.83643 4.24076 6.04777 4.45211L12 10.4062L17.954 4.45117C18.1654 4.23983 18.452 4.12109 18.7509 4.12109C19.0498 4.12109 19.3364 4.23983 19.5478 4.45117C19.7591 4.66251 19.8778 4.94916 19.8778 5.24804C19.8778 5.54693 19.7591 5.83358 19.5478 6.04492L13.5937 11.9999L19.5459 17.954Z" fill="currentColor" />
            </svg>
        </Button>
        <Modal.Header>
            <Modal.Title>
                <h5 className='m-0'>Add Information</h5>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className="common-modal-body">
            <div className="row pt-3">
                <div className='col-md-12 mb-4'>
                    <FloatingLabel controlId="floatingInput" label="Category" className="mb-0">
                        <Form.Control type="text" placeholder="Category" />
                    </FloatingLabel>
                </div>
                <div className='col-md-12 mb-4'>
                    <FloatingLabel controlId="floatingInput" label="Details" className="mb-0">
                        <Form.Control type="text" placeholder="Details" />
                    </FloatingLabel>
                </div>
                <div className='col-md-12 mb-0'>
                    <Form.Group controlId="formFile" className="mb-3 position-relative upload-input-box floating-upload-input-box form-group">
                        <Form.Label>Upload File</Form.Label>
                        <Form.Control type="file" className={fileSelected ? "file-selected" : "w-100 position-relative"} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { const input = e.target as HTMLInputElement; if (input.files && input.files.length > 0) { setFileSelected(true); } }} />
                        <span className="link-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 6H14.5003L11.8997 4.05C11.6397 3.85599 11.3241 3.7508 10.9997 3.75H6.75C6.35218 3.75 5.97064 3.90804 5.68934 4.18934C5.40804 4.47064 5.25 4.85218 5.25 5.25V6.75H3.75C3.35218 6.75 2.97064 6.90804 2.68934 7.18934C2.40804 7.47064 2.25 7.85218 2.25 8.25V18.75C2.25 19.1478 2.40804 19.5294 2.68934 19.8107C2.97064 20.092 3.35218 20.25 3.75 20.25H18.0834C18.459 20.2495 18.819 20.1001 19.0846 19.8346C19.3501 19.569 19.4995 19.209 19.5 18.8334V17.25H21.0834C21.459 17.2495 21.819 17.1001 22.0846 16.8346C22.3501 16.569 22.4995 16.209 22.5 15.8334V7.5C22.5 7.10218 22.342 6.72064 22.0607 6.43934C21.7794 6.15804 21.3978 6 21 6ZM18 18.75H3.75V8.25H7.99969L10.8 10.35C10.9298 10.4474 11.0877 10.5 11.25 10.5H18V18.75ZM21 15.75H19.5V10.5C19.5 10.1022 19.342 9.72064 19.0607 9.43934C18.7794 9.15804 18.3978 9 18 9H11.5003L8.89969 7.05C8.63967 6.85599 8.32411 6.7508 7.99969 6.75H6.75V5.25H10.9997L13.8 7.35C13.9298 7.44737 14.0877 7.5 14.25 7.5H21V15.75Z" fill="#97979E"/></svg>
                        </span>
                    </Form.Group>
                </div>
            </div>
        </Modal.Body>

        <Modal.Footer className='justify-content-between'>
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

export default AddInformationModal