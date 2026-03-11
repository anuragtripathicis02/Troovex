"use client";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { TagInput } from 'rsuite';

const OrganizationalStructur = () => {
    return (
        <>
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
            <div className='box-border'>
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
        </>
    )
}

export default OrganizationalStructur
