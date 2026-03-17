import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import { TagInput } from 'rsuite';

const CapitalFinancialSize = () => {
    return (
        <>
            <div className='row pt-2'>
                <div className='col-xxl-4 col-md-6 mb-4'>
                    <FloatingLabel controlId="floatingInput" label="Share Equity / Share Capital" className=" ">
                        <Form.Control type="text" placeholder="Share Equity / Share Capital" />
                    </FloatingLabel>
                </div>
                <div className='col-xxl-4 col-md-6 mb-4'>
                    <FloatingLabel controlId="floatingInput" label="Annual Revenue / Turnover (Range)" className=" ">
                        <Form.Control type="text" placeholder="Annual Revenue / Turnover (Range)" />
                    </FloatingLabel>
                </div>
                <div className='col-xxl-4 col-md-6 mb-4'>
                    <FloatingLabel controlId="floatingInput" label="Annual Procurement Budget" className=" ">
                        <Form.Control type="text" placeholder="Annual Procurement Budget" />
                    </FloatingLabel>
                </div>
                <div className='col-12'>
                    <div className="d-flex gap-3 align-items-center mb-4">
                        <span className="fs-14 d-flex gap-2 align-items-center">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M8.75 11.25C8.75 11.3983 8.70602 11.5433 8.6236 11.6667C8.54119 11.79 8.42406 11.8861 8.28701 11.9429C8.14997 11.9997 7.99917 12.0145 7.85368 11.9856C7.7082 11.9566 7.57456 11.8852 7.46967 11.7803C7.36478 11.6754 7.29335 11.5418 7.26441 11.3963C7.23548 11.2508 7.25033 11.1 7.30709 10.963C7.36386 10.8259 7.45999 10.7088 7.58333 10.6264C7.70666 10.544 7.85167 10.5 8 10.5C8.19892 10.5 8.38968 10.579 8.53033 10.7197C8.67098 10.8603 8.75 11.0511 8.75 11.25ZM8 4.5C6.62125 4.5 5.5 5.50938 5.5 6.75V7C5.5 7.13261 5.55268 7.25979 5.64645 7.35355C5.74022 7.44732 5.86739 7.5 6 7.5C6.13261 7.5 6.25979 7.44732 6.35356 7.35355C6.44732 7.25979 6.5 7.13261 6.5 7V6.75C6.5 6.0625 7.17313 5.5 8 5.5C8.82688 5.5 9.5 6.0625 9.5 6.75C9.5 7.4375 8.82688 8 8 8C7.86739 8 7.74022 8.05268 7.64645 8.14645C7.55268 8.24021 7.5 8.36739 7.5 8.5V9C7.5 9.13261 7.55268 9.25979 7.64645 9.35355C7.74022 9.44732 7.86739 9.5 8 9.5C8.13261 9.5 8.25979 9.44732 8.35356 9.35355C8.44732 9.25979 8.5 9.13261 8.5 9V8.955C9.64 8.74563 10.5 7.83625 10.5 6.75C10.5 5.50938 9.37875 4.5 8 4.5ZM14.5 8C14.5 9.28558 14.1188 10.5423 13.4046 11.6112C12.6903 12.6801 11.6752 13.5132 10.4874 14.0052C9.29973 14.4972 7.99279 14.6259 6.73192 14.3751C5.47104 14.1243 4.31285 13.5052 3.40381 12.5962C2.49477 11.6872 1.8757 10.529 1.6249 9.26809C1.37409 8.00721 1.50282 6.70028 1.99479 5.51256C2.48676 4.32484 3.31988 3.30968 4.3888 2.59545C5.45772 1.88122 6.71442 1.5 8 1.5C9.72335 1.50182 11.3756 2.18722 12.5942 3.40582C13.8128 4.62441 14.4982 6.27665 14.5 8ZM13.5 8C13.5 6.9122 13.1774 5.84883 12.5731 4.94436C11.9687 4.03989 11.1098 3.33494 10.1048 2.91866C9.09977 2.50238 7.9939 2.39346 6.92701 2.60568C5.86011 2.8179 4.8801 3.34172 4.11092 4.11091C3.34173 4.8801 2.8179 5.86011 2.60568 6.927C2.39347 7.9939 2.50238 9.09977 2.91867 10.1048C3.33495 11.1098 4.0399 11.9687 4.94437 12.5731C5.84884 13.1774 6.91221 13.5 8 13.5C9.45819 13.4983 10.8562 12.9184 11.8873 11.8873C12.9184 10.8562 13.4983 9.45818 13.5 8Z" fill="currentColor" />
                            </svg>
                            Direct Procurement (Core Spend)
                        </span>
                        <hr className="flex-grow-1"></hr>
                    </div>
                </div>
                <div className='col-md-12 mb-4'>
                    <div className="multipal-select-sec mb-2 position-relative floting-box">
                        <Form.Label>Applicable Sub-Categories</Form.Label>
                        <TagInput defaultValue={["Raw Materials", "Components & Parts", "Finished Goods for Resale", "Production-specific Supplies", "Freight / Inbound Logistics"]}
                            trigger={['Enter', 'Space', 'Comma']}
                            placeholder="Core Activities"
                            className="w-100 form-group"
                        />
                    </div>
                </div>
                <div className='col-xxl-4 col-md-6 mb-4'>
                    <FloatingLabel controlId="floatingInput" label="Annual Direct Procurement Spend" className=" ">
                        <Form.Control type="text" placeholder="Annual Direct Procurement Spend" />
                    </FloatingLabel>
                </div>
                <div className='col-xxl-4 col-md-6 mb-4'>
                    <FloatingLabel controlId="floatingSelect" label="Risk Level (Dropdown)" className="mb-0">
                        <Form.Select aria-label="Risk Level (Dropdown)">
                            <option>Low</option>
                            <option value="1">Low </option>
                            <option value="2">Low</option>
                            <option value="3">Low</option>
                        </Form.Select>
                    </FloatingLabel>
                </div>
                <div className='col-xxl-4 col-md-6 mb-4'>
                    <FloatingLabel controlId="floatingSelect" label="Required Approval Level" className="mb-0">
                        <Form.Select aria-label="Required Approval Level">
                            <option>Department Head</option>
                            <option value="1">Department Head </option>
                            <option value="2">Department Head</option>
                            <option value="3">Department Head</option>
                        </Form.Select>
                    </FloatingLabel>
                </div>
                <div className='col-md-12 mb-4'>
                    <div className="multipal-select-sec mb-2 position-relative floting-box">
                        <Form.Label>Procurement Method</Form.Label>
                        <TagInput defaultValue={["Consultation"]}
                            trigger={['Enter', 'Space', 'Comma']}
                            placeholder="Core Activities"
                            className="w-100 form-group"
                        />
                    </div>
                </div>
            </div>

            <div className='row pt-0'>
                <div className='col-12'>
                    <div className="d-flex gap-3 align-items-center mb-4">
                        <span className="fs-14 d-flex gap-2 align-items-center">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M8.75 11.25C8.75 11.3983 8.70602 11.5433 8.6236 11.6667C8.54119 11.79 8.42406 11.8861 8.28701 11.9429C8.14997 11.9997 7.99917 12.0145 7.85368 11.9856C7.7082 11.9566 7.57456 11.8852 7.46967 11.7803C7.36478 11.6754 7.29335 11.5418 7.26441 11.3963C7.23548 11.2508 7.25033 11.1 7.30709 10.963C7.36386 10.8259 7.45999 10.7088 7.58333 10.6264C7.70666 10.544 7.85167 10.5 8 10.5C8.19892 10.5 8.38968 10.579 8.53033 10.7197C8.67098 10.8603 8.75 11.0511 8.75 11.25ZM8 4.5C6.62125 4.5 5.5 5.50938 5.5 6.75V7C5.5 7.13261 5.55268 7.25979 5.64645 7.35355C5.74022 7.44732 5.86739 7.5 6 7.5C6.13261 7.5 6.25979 7.44732 6.35356 7.35355C6.44732 7.25979 6.5 7.13261 6.5 7V6.75C6.5 6.0625 7.17313 5.5 8 5.5C8.82688 5.5 9.5 6.0625 9.5 6.75C9.5 7.4375 8.82688 8 8 8C7.86739 8 7.74022 8.05268 7.64645 8.14645C7.55268 8.24021 7.5 8.36739 7.5 8.5V9C7.5 9.13261 7.55268 9.25979 7.64645 9.35355C7.74022 9.44732 7.86739 9.5 8 9.5C8.13261 9.5 8.25979 9.44732 8.35356 9.35355C8.44732 9.25979 8.5 9.13261 8.5 9V8.955C9.64 8.74563 10.5 7.83625 10.5 6.75C10.5 5.50938 9.37875 4.5 8 4.5ZM14.5 8C14.5 9.28558 14.1188 10.5423 13.4046 11.6112C12.6903 12.6801 11.6752 13.5132 10.4874 14.0052C9.29973 14.4972 7.99279 14.6259 6.73192 14.3751C5.47104 14.1243 4.31285 13.5052 3.40381 12.5962C2.49477 11.6872 1.8757 10.529 1.6249 9.26809C1.37409 8.00721 1.50282 6.70028 1.99479 5.51256C2.48676 4.32484 3.31988 3.30968 4.3888 2.59545C5.45772 1.88122 6.71442 1.5 8 1.5C9.72335 1.50182 11.3756 2.18722 12.5942 3.40582C13.8128 4.62441 14.4982 6.27665 14.5 8ZM13.5 8C13.5 6.9122 13.1774 5.84883 12.5731 4.94436C11.9687 4.03989 11.1098 3.33494 10.1048 2.91866C9.09977 2.50238 7.9939 2.39346 6.92701 2.60568C5.86011 2.8179 4.8801 3.34172 4.11092 4.11091C3.34173 4.8801 2.8179 5.86011 2.60568 6.927C2.39347 7.9939 2.50238 9.09977 2.91867 10.1048C3.33495 11.1098 4.0399 11.9687 4.94437 12.5731C5.84884 13.1774 6.91221 13.5 8 13.5C9.45819 13.4983 10.8562 12.9184 11.8873 11.8873C12.9184 10.8562 13.4983 9.45818 13.5 8Z" fill="currentColor" />
                            </svg>
                            Indirect Procurement (Operational Spend)
                        </span>
                        <hr className="flex-grow-1"></hr>
                    </div>
                </div>
                <div className='col-md-12 mb-4'>
                    <div className="multipal-select-sec mb-0 position-relative floting-box">
                        <Form.Label>Applicable Sub-Categories</Form.Label>
                        <TagInput defaultValue={["Office Supplies", "IT & Technology", "Facilities & Maintenance", "Marketing & Communications", "Travel & Accommodation"]}
                            trigger={['Enter', 'Space', 'Comma']}
                            placeholder="Core Activities"
                            className="w-100 form-group"
                        />
                    </div>
                </div>
                <div className='col-xxl-4 col-md-6 mb-4'>
                    <FloatingLabel controlId="floatingInput" label="Annual Indirect Procurement Spend" className=" ">
                        <Form.Control type="text" placeholder="Annual Indirect Procurement Spend" />
                    </FloatingLabel>
                </div>
                <div className='col-xxl-4 col-md-6 mb-4'>
                    <FloatingLabel controlId="floatingSelect" label="Recurring Spend" className="mb-0">
                        <Form.Select aria-label="Recurring Spend">
                            <option>Yes</option>
                            <option value="1">No </option>
                        </Form.Select>
                    </FloatingLabel>
                </div>
                <div className='col-xxl-4 col-md-6 mb-4'>
                    <FloatingLabel controlId="floatingSelect" label="Procurement Method" className="mb-0">
                        <Form.Select aria-label="Procurement Method">
                            <option>RFQ</option>
                            <option value="1">RFQ 1 </option>
                            <option value="2">RFQ 2 </option>
                            <option value="3">RFQ 3 </option>
                        </Form.Select>
                    </FloatingLabel>
                </div>
                <div className='col-xxl-4 col-md-6 mb-4'>
                    <FloatingLabel controlId="floatingSelect" label="Risk Level" className="mb-0">
                        <Form.Select aria-label="Risk Level">
                            <option>Medium</option>
                            <option value="1">Low</option>
                            <option value="2">High</option>
                        </Form.Select>
                    </FloatingLabel>
                </div>
                <div className='col-xxl-4 col-md-6 mb-4'>
                    <FloatingLabel controlId="floatingSelect" label="Approval Authority" className="mb-0">
                        <Form.Select aria-label="Approval Authority">
                            <option>Functional Head</option>
                            <option value="1">Functional Head 1 </option>
                            <option value="2">Functional Head 2 </option>
                            <option value="3">Functional Head 3 </option>
                        </Form.Select>
                    </FloatingLabel>
                </div>

            </div>

            <div className='row pt-0'>
                <div className='col-12'>
                    <div className="d-flex gap-3 align-items-center mb-4">
                        <span className="fs-14 d-flex gap-2 align-items-center">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M8.75 11.25C8.75 11.3983 8.70602 11.5433 8.6236 11.6667C8.54119 11.79 8.42406 11.8861 8.28701 11.9429C8.14997 11.9997 7.99917 12.0145 7.85368 11.9856C7.7082 11.9566 7.57456 11.8852 7.46967 11.7803C7.36478 11.6754 7.29335 11.5418 7.26441 11.3963C7.23548 11.2508 7.25033 11.1 7.30709 10.963C7.36386 10.8259 7.45999 10.7088 7.58333 10.6264C7.70666 10.544 7.85167 10.5 8 10.5C8.19892 10.5 8.38968 10.579 8.53033 10.7197C8.67098 10.8603 8.75 11.0511 8.75 11.25ZM8 4.5C6.62125 4.5 5.5 5.50938 5.5 6.75V7C5.5 7.13261 5.55268 7.25979 5.64645 7.35355C5.74022 7.44732 5.86739 7.5 6 7.5C6.13261 7.5 6.25979 7.44732 6.35356 7.35355C6.44732 7.25979 6.5 7.13261 6.5 7V6.75C6.5 6.0625 7.17313 5.5 8 5.5C8.82688 5.5 9.5 6.0625 9.5 6.75C9.5 7.4375 8.82688 8 8 8C7.86739 8 7.74022 8.05268 7.64645 8.14645C7.55268 8.24021 7.5 8.36739 7.5 8.5V9C7.5 9.13261 7.55268 9.25979 7.64645 9.35355C7.74022 9.44732 7.86739 9.5 8 9.5C8.13261 9.5 8.25979 9.44732 8.35356 9.35355C8.44732 9.25979 8.5 9.13261 8.5 9V8.955C9.64 8.74563 10.5 7.83625 10.5 6.75C10.5 5.50938 9.37875 4.5 8 4.5ZM14.5 8C14.5 9.28558 14.1188 10.5423 13.4046 11.6112C12.6903 12.6801 11.6752 13.5132 10.4874 14.0052C9.29973 14.4972 7.99279 14.6259 6.73192 14.3751C5.47104 14.1243 4.31285 13.5052 3.40381 12.5962C2.49477 11.6872 1.8757 10.529 1.6249 9.26809C1.37409 8.00721 1.50282 6.70028 1.99479 5.51256C2.48676 4.32484 3.31988 3.30968 4.3888 2.59545C5.45772 1.88122 6.71442 1.5 8 1.5C9.72335 1.50182 11.3756 2.18722 12.5942 3.40582C13.8128 4.62441 14.4982 6.27665 14.5 8ZM13.5 8C13.5 6.9122 13.1774 5.84883 12.5731 4.94436C11.9687 4.03989 11.1098 3.33494 10.1048 2.91866C9.09977 2.50238 7.9939 2.39346 6.92701 2.60568C5.86011 2.8179 4.8801 3.34172 4.11092 4.11091C3.34173 4.8801 2.8179 5.86011 2.60568 6.927C2.39347 7.9939 2.50238 9.09977 2.91867 10.1048C3.33495 11.1098 4.0399 11.9687 4.94437 12.5731C5.84884 13.1774 6.91221 13.5 8 13.5C9.45819 13.4983 10.8562 12.9184 11.8873 11.8873C12.9184 10.8562 13.4983 9.45818 13.5 8Z" fill="currentColor" />
                            </svg>
                            Capital Expenditure (CapEx)
                        </span>
                        <hr className="flex-grow-1"></hr>
                    </div>
                </div>
                <div className='col-md-12 mb-4'>
                    <div className="multipal-select-sec mb-0 position-relative floting-box">
                        <Form.Label>Applicable Sub-Categories</Form.Label>
                        <TagInput defaultValue={["Raw Materials", "Components & Parts", "Finished Goods for Resale", "Production-specific Supplies", "Freight / Inbound Logistics"]}
                            trigger={['Enter', 'Space', 'Comma']}
                            placeholder="Core Activities"
                            className="w-100 form-group"
                        />
                    </div>
                </div>
                <div className='col-xxl-4 col-md-6 mb-4'>
                    <FloatingLabel controlId="floatingInput" label="Annual CapEx Spend (USD)" className=" ">
                        <Form.Control type="text" placeholder="Annual CapEx Spend (USD)" />
                    </FloatingLabel>
                </div>
                <div className='col-xxl-4 col-md-6 mb-4'>
                    <FloatingLabel controlId="floatingInput" label="Expected Asset Life (Years)" className=" ">
                        <Form.Control type="text" placeholder="Expected Asset Life (Years)" />
                    </FloatingLabel>
                </div>
                <div className='col-xxl-4 col-md-6 mb-4'>
                    <FloatingLabel controlId="floatingSelect" label="Risk Level (Dropdown)" className="mb-0">
                        <Form.Select aria-label="Risk Level (Dropdown)">
                            <option>Medium</option>
                            <option value="1">high </option>
                            <option value="2">Low </option>
                        </Form.Select>
                    </FloatingLabel>
                </div>
                <div className='col-xxl-8 col-md-12 mb-4'>
                    <div className="multipal-select-sec mb-0 position-relative floting-box">
                        <Form.Label>Procurement Method</Form.Label>
                        <TagInput defaultValue={["Consultation", "Call for Tender"]}
                            trigger={['Enter', 'Space', 'Comma']}
                            placeholder="Core Activities"
                            className="w-100 form-group"
                        />
                    </div>
                </div>
                <div className='col-xxl-4 col-md-12 mb-4'>
                    <FloatingLabel controlId="floatingSelect" label="Approval Level" className="mb-0">
                        <Form.Select aria-label="Approval Level">
                            <option>Finance Head</option>
                            <option value="1">Finance Head 1 </option>
                            <option value="2">Finance Head 2 </option>
                            <option value="3">Finance Head 3 </option>
                        </Form.Select>
                    </FloatingLabel>
                </div>
            </div>

            <div className='row pt-0'>
                <div className='col-12'>
                    <div className="d-flex gap-3 align-items-center mb-4">
                        <span className="fs-14 d-flex gap-2 align-items-center">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M8.75 11.25C8.75 11.3983 8.70602 11.5433 8.6236 11.6667C8.54119 11.79 8.42406 11.8861 8.28701 11.9429C8.14997 11.9997 7.99917 12.0145 7.85368 11.9856C7.7082 11.9566 7.57456 11.8852 7.46967 11.7803C7.36478 11.6754 7.29335 11.5418 7.26441 11.3963C7.23548 11.2508 7.25033 11.1 7.30709 10.963C7.36386 10.8259 7.45999 10.7088 7.58333 10.6264C7.70666 10.544 7.85167 10.5 8 10.5C8.19892 10.5 8.38968 10.579 8.53033 10.7197C8.67098 10.8603 8.75 11.0511 8.75 11.25ZM8 4.5C6.62125 4.5 5.5 5.50938 5.5 6.75V7C5.5 7.13261 5.55268 7.25979 5.64645 7.35355C5.74022 7.44732 5.86739 7.5 6 7.5C6.13261 7.5 6.25979 7.44732 6.35356 7.35355C6.44732 7.25979 6.5 7.13261 6.5 7V6.75C6.5 6.0625 7.17313 5.5 8 5.5C8.82688 5.5 9.5 6.0625 9.5 6.75C9.5 7.4375 8.82688 8 8 8C7.86739 8 7.74022 8.05268 7.64645 8.14645C7.55268 8.24021 7.5 8.36739 7.5 8.5V9C7.5 9.13261 7.55268 9.25979 7.64645 9.35355C7.74022 9.44732 7.86739 9.5 8 9.5C8.13261 9.5 8.25979 9.44732 8.35356 9.35355C8.44732 9.25979 8.5 9.13261 8.5 9V8.955C9.64 8.74563 10.5 7.83625 10.5 6.75C10.5 5.50938 9.37875 4.5 8 4.5ZM14.5 8C14.5 9.28558 14.1188 10.5423 13.4046 11.6112C12.6903 12.6801 11.6752 13.5132 10.4874 14.0052C9.29973 14.4972 7.99279 14.6259 6.73192 14.3751C5.47104 14.1243 4.31285 13.5052 3.40381 12.5962C2.49477 11.6872 1.8757 10.529 1.6249 9.26809C1.37409 8.00721 1.50282 6.70028 1.99479 5.51256C2.48676 4.32484 3.31988 3.30968 4.3888 2.59545C5.45772 1.88122 6.71442 1.5 8 1.5C9.72335 1.50182 11.3756 2.18722 12.5942 3.40582C13.8128 4.62441 14.4982 6.27665 14.5 8ZM13.5 8C13.5 6.9122 13.1774 5.84883 12.5731 4.94436C11.9687 4.03989 11.1098 3.33494 10.1048 2.91866C9.09977 2.50238 7.9939 2.39346 6.92701 2.60568C5.86011 2.8179 4.8801 3.34172 4.11092 4.11091C3.34173 4.8801 2.8179 5.86011 2.60568 6.927C2.39347 7.9939 2.50238 9.09977 2.91867 10.1048C3.33495 11.1098 4.0399 11.9687 4.94437 12.5731C5.84884 13.1774 6.91221 13.5 8 13.5C9.45819 13.4983 10.8562 12.9184 11.8873 11.8873C12.9184 10.8562 13.4983 9.45818 13.5 8Z" fill="currentColor" />
                            </svg>
                            Services Procurement
                        </span>
                        <hr className="flex-grow-1"></hr>
                    </div>
                </div>
                <div className='col-md-12 mb-4'>
                    <div className="multipal-select-sec mb-0 position-relative floting-box">
                        <Form.Label>Service Types</Form.Label>
                        <TagInput defaultValue={["Consulting Services", "Outsourced Operations", "Production-specific Supplies", "Professional Services (HR, Training)", "Maintenance & Support Contracts"]}
                            trigger={['Enter', 'Space', 'Comma']}
                            placeholder="Core Activities"
                            className="w-100 form-group"
                        />
                    </div>
                </div>
                <div className='col-xxl-4 col-md-6 mb-4'>
                    <FloatingLabel controlId="floatingInput" label="Annual Services Spend" className=" ">
                        <Form.Control type="text" placeholder="Annual Services Spend" />
                    </FloatingLabel>
                </div>
                <div className='col-xxl-4 col-md-6 mb-4'>
                    <FloatingLabel controlId="floatingInput" label="Contract Type" className=" ">
                        <Form.Control type="text" placeholder="Contract Type" />
                    </FloatingLabel>
                </div>
                <div className='col-xxl-4 col-md-6 mb-4'>
                    <FloatingLabel controlId="floatingSelect" label="Contract Duration" className="mb-0">
                        <Form.Select aria-label="Contract Duration">
                            <option> Short-term (&lt; 1 year) </option>
                            <option value="1"> Short-term (&lt; 2 year)  </option>
                            <option value="2"> Short-term (&lt; 3 year) </option>
                        </Form.Select>
                    </FloatingLabel>
                </div>
                <div className='col-xxl-4 col-md-12 mb-4'>
                    <FloatingLabel controlId="floatingSelect" label="SLA / Performance Monitoring" className="mb-0">
                        <Form.Select aria-label="SLA / Performance Monitoring">
                            <option>Enabled</option>
                            <option value="1">Disabled</option>
                        </Form.Select>
                    </FloatingLabel>
                </div>
                <div className='col-xxl-8 col-md-12 mb-4'>
                    <div className="multipal-select-sec mb-0 position-relative floting-box">
                        <Form.Label>Procurement Method</Form.Label>
                        <TagInput defaultValue={["Consultation", "Call for Tender", "RFQ"]}
                            trigger={['Enter', 'Space', 'Comma']}
                            placeholder="Core Activities"
                            className="w-100 form-group"
                        />
                    </div>
                </div>

            </div>

        </>
    )
}

export default CapitalFinancialSize