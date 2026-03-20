"use client";
import Link from 'next/link'
import React, { useRef, useState } from 'react';
import { Modal, Button, Dropdown } from 'react-bootstrap';
import Image from 'next/image';
import { FloatingLabel, Form } from 'react-bootstrap'
import OnlyFlagPhoneInput from '@/component/common/OnlyFlagPhoneInput'
import AttachmentIcon from '@/component/common/Icons/AttachmentIcon';
import PdfUpload from "@/component/common/PdfUpload";

export const AddProject = ({ show, handleClose }: any) => {
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
                    <h5 className='m-0'>Add Project</h5>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="common-modal-body">
                <div className='row'>
                    <div className="col-md-3 mb-4 mb-md-0">
                        <PdfUpload title="Upload Company Logo" subtitle="Recommended 512x512px" type="pdf" icon={<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32.5 5H7.5C6.83696 5 6.20107 5.26339 5.73223 5.73223C5.26339 6.20107 5 6.83696 5 7.5V32.5C5 33.163 5.26339 33.7989 5.73223 34.2678C6.20107 34.7366 6.83696 35 7.5 35H32.5C33.163 35 33.7989 34.7366 34.2678 34.2678C34.7366 33.7989 35 33.163 35 32.5V7.5C35 6.83696 34.7366 6.20107 34.2678 5.73223C33.7989 5.26339 33.163 5 32.5 5ZM7.5 7.5H32.5V19.5906L28.6422 15.7312C28.1734 15.2628 27.5378 14.9996 26.875 14.9996C26.2122 14.9996 25.5766 15.2628 25.1078 15.7312L8.33906 32.5H7.5V7.5ZM32.5 32.5H11.875L26.875 17.5L32.5 23.125V32.5ZM15 18.75C15.7417 18.75 16.4667 18.5301 17.0834 18.118C17.7001 17.706 18.1807 17.1203 18.4645 16.4351C18.7484 15.7498 18.8226 14.9958 18.6779 14.2684C18.5333 13.541 18.1761 12.8728 17.6517 12.3483C17.1272 11.8239 16.459 11.4667 15.7316 11.3221C15.0042 11.1774 14.2502 11.2516 13.5649 11.5355C12.8797 11.8193 12.294 12.2999 11.882 12.9166C11.4699 13.5333 11.25 14.2583 11.25 15C11.25 15.9946 11.6451 16.9484 12.3483 17.6517C13.0516 18.3549 14.0054 18.75 15 18.75ZM15 13.75C15.2472 13.75 15.4889 13.8233 15.6945 13.9607C15.9 14.098 16.0602 14.2932 16.1549 14.5216C16.2495 14.7501 16.2742 15.0014 16.226 15.2439C16.1778 15.4863 16.0587 15.7091 15.8839 15.8839C15.7091 16.0587 15.4863 16.1778 15.2439 16.226C15.0014 16.2742 14.7501 16.2495 14.5216 16.1549C14.2932 16.0602 14.098 15.9 13.9607 15.6945C13.8233 15.4889 13.75 15.2472 13.75 15C13.75 14.6685 13.8817 14.3505 14.1161 14.1161C14.3505 13.8817 14.6685 13.75 15 13.75Z" fill="#97979E" /></svg>} />
                    </div>
                    <div className='col-md-9'>
                        <div className='row'>
                            <div className='col-md-6 mb-4'>
                                <FloatingLabel controlId="floatingInput" label="Company Name" >
                                    <Form.Control type="text" placeholder="Sonatrach" />
                                </FloatingLabel>
                            </div>
                            <div className='col-md-6 mb-4'>
                                <FloatingLabel controlId="floatingSelect" label="Project Domain">
                                    <Form.Select aria-label="Account Currency">
                                        <option>Hardware Installation</option>
                                        <option value="1">Hardware Installation 1</option>
                                        <option value="2">Hardware Installation 2</option>
                                        <option value="3">Hardware Installation 3</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </div>

                            <div className='col-md-6 mb-4'>
                                <FloatingLabel controlId="floatingInput" label="Company Address">
                                    <Form.Control type="text" placeholder="John Doe" />
                                </FloatingLabel>
                            </div>

                            <div className='col-md-6 mb-4'>
                                <FloatingLabel controlId="floatingInput" label="Project Type">
                                    <Form.Control type="text" placeholder="John Doe" />
                                </FloatingLabel>
                            </div>

                            <div className='col-md-6 mb-4'>
                                <FloatingLabel controlId="floatingInput" label="Project Duration">
                                    <Form.Control type="text" placeholder="120 Days" />
                                </FloatingLabel>
                            </div>

                            <div className='col-md-6 mb-4'>
                                <FloatingLabel controlId="floatingInput" label="Project Amount">
                                    <Form.Control type="text" placeholder="23456 AD" />
                                </FloatingLabel>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 min-height-box'>
                        <FloatingLabel controlId="floatingInput" label="Describe project" >
                            <Form.Control type="text" placeholder="Sonatrach" />
                        </FloatingLabel>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6 col-lg-3 mt-4'>
                        <FloatingLabel controlId="floatingInput" label="Contact Person" >
                            <Form.Control type="text" placeholder="Sonatrach" />
                        </FloatingLabel>
                    </div>
                    <div className='col-md-6 col-lg-3 mt-4'>
                        <FloatingLabel controlId="floatingInput" label="Designation" >
                            <Form.Control type="text" placeholder="Sonatrach" />
                        </FloatingLabel>
                    </div>
                    <div className='col-md-6 col-lg-3 mt-4'>
                        <div className="fleg-box position-relative floting-box">
                            <OnlyFlagPhoneInput label='Phone' />
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3 mt-4'>
                        <FloatingLabel controlId="floatingInput" label="Email" >
                            <Form.Control type="text" placeholder="Sonatrach" />
                        </FloatingLabel>
                    </div>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <div className='me-auto footer-file-upload'>
                    <div className='d-flex gap-2 flex-column'>
                        <Form.Label className='mb-0'><AttachmentIcon /> Attach Media</Form.Label>
                        <Form.Group controlId="formFile" className="position-relative upload-input-box form-group">
                            <Form.Control type="file" className={fileSelected ? "file-selected" : "w-100 position-relative"} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { const input = e.target as HTMLInputElement; if (input.files && input.files.length > 0) { setFileSelected(true); } }} />
                        </Form.Group>
                    </div>
                </div>

                <button className='btn-outline grey-btn' onClick={handleClose}>
                    Cancel
                </button>
                <button className='btn-outline fill-btn'>
                    Save Details
                </button>
            </Modal.Footer>
        </Modal>
    )
}
