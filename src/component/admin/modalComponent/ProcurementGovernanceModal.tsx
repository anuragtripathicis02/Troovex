"use client";
import React, { useState } from 'react';
import { Modal, Button, Form, FloatingLabel } from 'react-bootstrap';
import Link from 'next/link'
import Image from 'next/image';
import Delete from '@/component/common/Icons/Delete';
import PdfUpload from "@/component/common/PdfUpload";

const ProcurementGovernanceModal = ({ show, handleClose }: any) => {
    type Member = {
        name: string;
        ownerType: string;
        ownership: string;
    };

    const [members, setMembers] = useState<Member[]>([
        { name: "", ownerType: "", ownership: "" }
    ]);

    const handleChange = (
        index: number,
        field: keyof Member,
        value: string
    ) => {
        const updated = [...members];
        updated[index][field] = value;
        setMembers(updated);
    };

    const addRow = () => {
        setMembers([...members, { name: "", ownerType: "", ownership: "" }]);
    };

    const deleteRow = (index: number) => {
        const updated = members.filter((_, i) => i !== index);
        setMembers(updated);
    };

    return (
        <Modal show={show} onHide={handleClose} centered className="common-modal md-modal pt-lg-4 pt-5 modal-list-board-member">
            <Button variant="link" className="btn-close-btn" onClick={handleClose}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M19.5459 17.954C19.7572 18.1653 19.876 18.452 19.876 18.7509C19.876 19.0497 19.7572 19.3364 19.5459 19.5477C19.3346 19.7591 19.0479 19.8778 18.749 19.8778C18.4501 19.8778 18.1635 19.7591 17.9521 19.5477L12 13.5937L6.0459 19.5459C5.83455 19.7572 5.54791 19.8759 5.24902 19.8759C4.95014 19.8759 4.66349 19.7572 4.45215 19.5459C4.2408 19.3345 4.12207 19.0479 4.12207 18.749C4.12207 18.4501 4.2408 18.1635 4.45215 17.9521L10.4062 11.9999L4.45402 6.04586C4.24268 5.83451 4.12395 5.54787 4.12395 5.24898C4.12395 4.9501 4.24268 4.66345 4.45402 4.45211C4.66537 4.24076 4.95201 4.12203 5.2509 4.12203C5.54978 4.12203 5.83643 4.24076 6.04777 4.45211L12 10.4062L17.954 4.45117C18.1654 4.23983 18.452 4.12109 18.7509 4.12109C19.0498 4.12109 19.3364 4.23983 19.5478 4.45117C19.7591 4.66251 19.8778 4.94916 19.8778 5.24804C19.8778 5.54693 19.7591 5.83358 19.5478 6.04492L13.5937 11.9999L19.5459 17.954Z" fill="currentColor" />
                </svg>
            </Button>
            <Modal.Header>
                <Modal.Title>
                    <h5 className='m-0'>Add Board Members</h5>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="common-modal-body">
                {members.map((member, index) => (
                    <div className='member-list-add-card' key={index}>
                        <div className='row align-items-center pe-60 position-relative'>
                            <div className='col mb-3'>
                                <Form.Label>Member Image</Form.Label>
                                <PdfUpload title="Upload Image" subtitle="" type="pdf" icon={<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32.5 5H7.5C6.83696 5 6.20107 5.26339 5.73223 5.73223C5.26339 6.20107 5 6.83696 5 7.5V32.5C5 33.163 5.26339 33.7989 5.73223 34.2678C6.20107 34.7366 6.83696 35 7.5 35H32.5C33.163 35 33.7989 34.7366 34.2678 34.2678C34.7366 33.7989 35 33.163 35 32.5V7.5C35 6.83696 34.7366 6.20107 34.2678 5.73223C33.7989 5.26339 33.163 5 32.5 5ZM7.5 7.5H32.5V19.5906L28.6422 15.7312C28.1734 15.2628 27.5378 14.9996 26.875 14.9996C26.2122 14.9996 25.5766 15.2628 25.1078 15.7312L8.33906 32.5H7.5V7.5ZM32.5 32.5H11.875L26.875 17.5L32.5 23.125V32.5ZM15 18.75C15.7417 18.75 16.4667 18.5301 17.0834 18.118C17.7001 17.706 18.1807 17.1203 18.4645 16.4351C18.7484 15.7498 18.8226 14.9958 18.6779 14.2684C18.5333 13.541 18.1761 12.8728 17.6517 12.3483C17.1272 11.8239 16.459 11.4667 15.7316 11.3221C15.0042 11.1774 14.2502 11.2516 13.5649 11.5355C12.8797 11.8193 12.294 12.2999 11.882 12.9166C11.4699 13.5333 11.25 14.2583 11.25 15C11.25 15.9946 11.6451 16.9484 12.3483 17.6517C13.0516 18.3549 14.0054 18.75 15 18.75ZM15 13.75C15.2472 13.75 15.4889 13.8233 15.6945 13.9607C15.9 14.098 16.0602 14.2932 16.1549 14.5216C16.2495 14.7501 16.2742 15.0014 16.226 15.2439C16.1778 15.4863 16.0587 15.7091 15.8839 15.8839C15.7091 16.0587 15.4863 16.1778 15.2439 16.226C15.0014 16.2742 14.7501 16.2495 14.5216 16.1549C14.2932 16.0602 14.098 15.9 13.9607 15.6945C13.8233 15.4889 13.75 15.2472 13.75 15C13.75 14.6685 13.8817 14.3505 14.1161 14.1161C14.3505 13.8817 14.6685 13.75 15 13.75Z" fill="#97979E" /></svg>} />
                            </div>
                            <div className='col col-form'>
                                <FloatingLabel controlId="floatingInput" label="Employee Full Name" className="mb-4">
                                    <Form.Control type="text" placeholder="Employee Full Name" value={member.name} onChange={(e) => handleChange(index, "name", e.target.value)} />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingInput" label="Position / Job Title" className="mb-0 position-relative">
                                    <Form.Control type="text" placeholder="Position / Job Title" value={member.ownership} onChange={(e) => handleChange(index, "ownership", e.target.value)} />
                                </FloatingLabel>
                            </div>
                            <div className='col btn-delete-modal'>
                                <Link href='' className="ui-icon icon-delete mb-3" onClick={(e) => { e.preventDefault(); deleteRow(index); }}>
                                    <Delete />
                                </Link>
                            </div>
                        </div>
                        {/* <hr className='mt-2 pb-2 pt-0'/> */}
                    </div>
                ))}
                <button className="add-row-btn btn-outline btn-light-blue mt-3" onClick={addRow}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 1.875C8.39303 1.875 6.82214 2.35152 5.486 3.24431C4.14985 4.1371 3.10844 5.40605 2.49348 6.8907C1.87852 8.37535 1.71762 10.009 2.03112 11.5851C2.34463 13.1612 3.11846 14.6089 4.25476 15.7452C5.39106 16.8815 6.8388 17.6554 8.41489 17.9689C9.99099 18.2824 11.6247 18.1215 13.1093 17.5065C14.594 16.8916 15.8629 15.8502 16.7557 14.514C17.6485 13.1779 18.125 11.607 18.125 10C18.1227 7.84581 17.266 5.78051 15.7427 4.25727C14.2195 2.73403 12.1542 1.87727 10 1.875ZM10 16.875C8.64026 16.875 7.31105 16.4718 6.18046 15.7164C5.04987 14.9609 4.16868 13.8872 3.64833 12.6309C3.12798 11.3747 2.99183 9.99237 3.2571 8.65875C3.52238 7.32513 4.17716 6.10013 5.13864 5.13864C6.10013 4.17715 7.32514 3.52237 8.65876 3.2571C9.99238 2.99183 11.3747 3.12798 12.631 3.64833C13.8872 4.16868 14.9609 5.04987 15.7164 6.18045C16.4718 7.31104 16.875 8.64025 16.875 10C16.8729 11.8227 16.1479 13.5702 14.8591 14.8591C13.5702 16.1479 11.8227 16.8729 10 16.875ZM13.75 10C13.75 10.1658 13.6842 10.3247 13.5669 10.4419C13.4497 10.5592 13.2908 10.625 13.125 10.625H10.625V13.125C10.625 13.2908 10.5592 13.4497 10.4419 13.5669C10.3247 13.6842 10.1658 13.75 10 13.75C9.83424 13.75 9.67527 13.6842 9.55806 13.5669C9.44085 13.4497 9.375 13.2908 9.375 13.125V10.625H6.875C6.70924 10.625 6.55027 10.5592 6.43306 10.4419C6.31585 10.3247 6.25 10.1658 6.25 10C6.25 9.83424 6.31585 9.67527 6.43306 9.55806C6.55027 9.44085 6.70924 9.375 6.875 9.375H9.375V6.875C9.375 6.70924 9.44085 6.55027 9.55806 6.43306C9.67527 6.31585 9.83424 6.25 10 6.25C10.1658 6.25 10.3247 6.31585 10.4419 6.43306C10.5592 6.55027 10.625 6.70924 10.625 6.875V9.375H13.125C13.2908 9.375 13.4497 9.44085 13.5669 9.55806C13.6842 9.67527 13.75 9.83424 13.75 10Z" fill="currentColor" /></svg> Add List Row
                </button>
            </Modal.Body>

            <Modal.Footer>
                <button className='btn-outline grey-btn' onClick={handleClose}>
                    Cancel
                </button>
                <button className='btn-outline fill-btn'>
                    Save Members
                </button>
            </Modal.Footer>

        </Modal>
    )
}

export default ProcurementGovernanceModal