"use client";
import FileUploadList from '@/component/common/FileUploadList';
import Link from 'next/link';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { TagInput } from 'rsuite';

const OrganizationalStructur = () => {
    return (
        <>
            <div className="list-card-box d-flex align-items-center gap-0 justify-content-between flex-wrap mb-4">
                <FileUploadList title="Articles of Association" required />
            </div>
            <div className="d-flex gap-3 align-items-center mb-4">
                <span className="fs-14">Departments / Organizational Units</span>
                <hr className="flex-grow-1"></hr>
            </div>
            <div className='box-border mb-4'>
                <div className='row'>
                    <div className='col-md-4'>
                        <FloatingLabel controlId="floatingInput" label="Department / Unit Name" className="mb-4">
                            <Form.Control type="text" placeholder="Finance & Accounting" />
                        </FloatingLabel>
                    </div>
                    <div className='col-md-4'>
                        <FloatingLabel controlId="floatingInput" label="Department Head / Process Owner" className="mb-4">
                            <Form.Control type="text" placeholder="Finance & Accounting" />
                        </FloatingLabel>
                    </div>
                    <div className='col-md-4'>
                        <FloatingLabel controlId="floatingInput" label="Position / Title" className="mb-4">
                            <Form.Control type="text" placeholder="Finance & Accounting" />
                        </FloatingLabel>
                    </div>
                    <div className='col-md-4'>
                        <FloatingLabel controlId="floatingSelect" label="Purchasing Authority" className="mb-4">
                            <Form.Select aria-label="Floating label select example">
                                <option>Yes</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </FloatingLabel>
                    </div>
                    <div className='col-md-4'>
                        <FloatingLabel controlId="floatingSelect" label="Budget Responsibility" className="mb-4">
                            <Form.Select aria-label="Floating label select example">
                                <option>Yes</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </FloatingLabel>
                    </div>
                    <div className='col-md-4'>
                        <FloatingLabel controlId="floatingSelect" label="Budget Amount" className="mb-4">
                            <Form.Select aria-label="Floating label select example">
                                <option>Yes</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </FloatingLabel>
                    </div>
                    <div className='col-md-12'>
                        <div className="multipal-select-sec mb-2 position-relative floting-box">
                            <Form.Label>Main Spend Categories</Form.Label>
                            <TagInput trigger={['Enter', 'Space', 'Comma']} placeholder="Core Activities" onCreate={(value, item) => { console.log(value, item); }} className="w-100 form-group" />
                        </div>
                    </div>

                </div>
            </div>
            <div className='box-border mb-4'>
                <div className='row'>
                    <div className='col-md-4'>
                        <FloatingLabel controlId="floatingSelect" label="Department / Unit Name" className="mb-4">
                            <Form.Select aria-label="Floating label select example">
                                <option>Finance & Accounting</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </FloatingLabel>
                    </div>
                    <div className='col-md-4'>
                        <FloatingLabel controlId="floatingSelect" label="Department Head / Process Owner" className="mb-4">
                            <Form.Select aria-label="Floating label select example">
                                <option>Joseph Seeds</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </FloatingLabel>
                    </div>
                    <div className='col-md-4'>
                        <FloatingLabel controlId="floatingSelect" label="Position / Title" className="mb-4">
                            <Form.Select aria-label="Floating label select example">
                                <option>Department Head</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </FloatingLabel>
                    </div>
                    <div className='col-md-4'>
                        <FloatingLabel controlId="floatingSelect" label="Purchasing Authority" className="mb-4">
                            <Form.Select aria-label="Floating label select example">
                                <option>Yes</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </FloatingLabel>
                    </div>
                    <div className='col-md-4'>
                        <FloatingLabel controlId="floatingSelect" label="Budget Responsibility" className="mb-4">
                            <Form.Select aria-label="Floating label select example">
                                <option>Yes</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </FloatingLabel>
                    </div>
                    <div className='col-md-4'>
                        <FloatingLabel controlId="floatingSelect" label="Budget Amount" className="mb-4">
                            <Form.Select aria-label="Floating label select example">
                                <option>$ 23456</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </FloatingLabel>
                    </div>
                    <div className='col-md-12'>
                        <div className="multipal-select-sec mb-2 position-relative floting-box">
                            <Form.Label>Main Spend Categories</Form.Label>
                            <TagInput trigger={['Enter', 'Space', 'Comma']} placeholder="Core Activities" onCreate={(value, item) => { console.log(value, item); }} className="w-100 form-group" />
                        </div>
                    </div>
                </div>
            </div>
             <Link href="" className="d-inline-flex align-items-center gap-1 p-0 btn-grey-text border-0 bg-transparent">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1.5625C8.33122 1.5625 6.69992 2.05735 5.31238 2.98448C3.92484 3.9116 2.84338 5.22936 2.20477 6.77111C1.56616 8.31286 1.39907 10.0094 1.72463 11.6461C2.05019 13.2828 2.85379 14.7862 4.03379 15.9662C5.2138 17.1462 6.71721 17.9498 8.35393 18.2754C9.99064 18.6009 11.6871 18.4338 13.2289 17.7952C14.7706 17.1566 16.0884 16.0752 17.0155 14.6876C17.9427 13.3001 18.4375 11.6688 18.4375 10C18.435 7.763 17.5453 5.61833 15.9635 4.03653C14.3817 2.45473 12.237 1.56498 10 1.5625ZM10 16.5625C8.70206 16.5625 7.43327 16.1776 6.35407 15.4565C5.27488 14.7354 4.43374 13.7105 3.93704 12.5114C3.44034 11.3122 3.31038 9.99272 3.5636 8.71972C3.81682 7.44672 4.44183 6.27739 5.35962 5.35961C6.2774 4.44183 7.44672 3.81681 8.71972 3.5636C9.99272 3.31038 11.3122 3.44034 12.5114 3.93704C13.7105 4.43374 14.7354 5.27487 15.4565 6.35407C16.1776 7.43327 16.5625 8.70206 16.5625 10C16.5606 11.7399 15.8686 13.408 14.6383 14.6383C13.408 15.8686 11.7399 16.5606 10 16.5625ZM14.0625 10C14.0625 10.2486 13.9637 10.4871 13.7879 10.6629C13.6121 10.8387 13.3736 10.9375 13.125 10.9375H10.9375V13.125C10.9375 13.3736 10.8387 13.6121 10.6629 13.7879C10.4871 13.9637 10.2486 14.0625 10 14.0625C9.75136 14.0625 9.51291 13.9637 9.33709 13.7879C9.16128 13.6121 9.0625 13.3736 9.0625 13.125V10.9375H6.875C6.62636 10.9375 6.38791 10.8387 6.21209 10.6629C6.03628 10.4871 5.9375 10.2486 5.9375 10C5.9375 9.75136 6.03628 9.5129 6.21209 9.33709C6.38791 9.16127 6.62636 9.0625 6.875 9.0625H9.0625V6.875C9.0625 6.62636 9.16128 6.3879 9.33709 6.21209C9.51291 6.03627 9.75136 5.9375 10 5.9375C10.2486 5.9375 10.4871 6.03627 10.6629 6.21209C10.8387 6.3879 10.9375 6.62636 10.9375 6.875V9.0625H13.125C13.3736 9.0625 13.6121 9.16127 13.7879 9.33709C13.9637 9.5129 14.0625 9.75136 14.0625 10Z" fill="currentColor"/></svg>
                        <span>Add Department/Unit</span>
                    </Link>
        </>
    )
}

export default OrganizationalStructur
