"use client";
import React, { useState } from 'react';
import { Modal, Button, Form, FloatingLabel } from 'react-bootstrap';
import Link from 'next/link'
import Delete from '@/component/common/Icons/Delete';
import CountryName from '@/component/common/CountryName';

const AddBranchSiteDetails  = ({ show, handleClose }: any) => {
    type Member = {
    name: string;
    ownerType: string;
    address: string;
    };

  const [members, setMembers] = useState<Member[]>([
  { name: "", ownerType: "", address: "" }
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
    setMembers([...members, { name: "", ownerType: "", address: "" }]);
  };

  const deleteRow = (index: number) => {
    const updated = members.filter((_, i) => i !== index);
    setMembers(updated);
  };

  return (
    <Modal show={show} onHide={handleClose} centered className="common-modal lg-modal pt-lg-4 pt-5">
        <Button variant="link" className="btn-close-btn" onClick={handleClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19.5459 17.954C19.7572 18.1653 19.876 18.452 19.876 18.7509C19.876 19.0497 19.7572 19.3364 19.5459 19.5477C19.3346 19.7591 19.0479 19.8778 18.749 19.8778C18.4501 19.8778 18.1635 19.7591 17.9521 19.5477L12 13.5937L6.0459 19.5459C5.83455 19.7572 5.54791 19.8759 5.24902 19.8759C4.95014 19.8759 4.66349 19.7572 4.45215 19.5459C4.2408 19.3345 4.12207 19.0479 4.12207 18.749C4.12207 18.4501 4.2408 18.1635 4.45215 17.9521L10.4062 11.9999L4.45402 6.04586C4.24268 5.83451 4.12395 5.54787 4.12395 5.24898C4.12395 4.9501 4.24268 4.66345 4.45402 4.45211C4.66537 4.24076 4.95201 4.12203 5.2509 4.12203C5.54978 4.12203 5.83643 4.24076 6.04777 4.45211L12 10.4062L17.954 4.45117C18.1654 4.23983 18.452 4.12109 18.7509 4.12109C19.0498 4.12109 19.3364 4.23983 19.5478 4.45117C19.7591 4.66251 19.8778 4.94916 19.8778 5.24804C19.8778 5.54693 19.7591 5.83358 19.5478 6.04492L13.5937 11.9999L19.5459 17.954Z" fill="currentColor" />
            </svg>
        </Button>
        <Modal.Header>
            <Modal.Title>
                <h5 className='m-0'>Add Branch / Site Details</h5>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className="common-modal-body">
            {members.map((member, index) => (
            <div className='member-list-add-card' key={index}>
                <div className='row align-items-center pe-60 position-relative'>
                    <div className='col'>
                        <FloatingLabel controlId="floatingInput" label="Branch/Site Type" className="mb-3">
                            <Form.Control type="text"  placeholder="Branch/Site Type"  value={member.name} onChange={(e) => handleChange(index, "name", e.target.value)}/>
                        </FloatingLabel>
                    </div>
                    <div className='col'> 
                        <div className="flag-code-sec mb-3 position-relative floting-box">
                            <CountryName label='Country'/>
                        </div>
                    </div>
                    <div className='col'>
                        <FloatingLabel controlId="floatingInput" label="Full Address" className="mb-3">
                            <Form.Control type="text"  placeholder="Full Address"  value={member.address} onChange={(e) => handleChange(index, "address", e.target.value)}/>
                        </FloatingLabel>
                    </div>
                    <div className='col btn-delete-modal'>
                        <Link href='' className="ui-icon icon-delete mb-3" onClick={(e) => { e.preventDefault(); deleteRow(index);}}>
                            <Delete />
                        </Link>
                    </div>
                </div>
                {/* <hr className='mt-2 pb-2 pt-0'/> */}
            </div>
        ))}
        <button className="add-row-btn btn-outline btn-light-blue " onClick={addRow}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 1.875C8.39303 1.875 6.82214 2.35152 5.486 3.24431C4.14985 4.1371 3.10844 5.40605 2.49348 6.8907C1.87852 8.37535 1.71762 10.009 2.03112 11.5851C2.34463 13.1612 3.11846 14.6089 4.25476 15.7452C5.39106 16.8815 6.8388 17.6554 8.41489 17.9689C9.99099 18.2824 11.6247 18.1215 13.1093 17.5065C14.594 16.8916 15.8629 15.8502 16.7557 14.514C17.6485 13.1779 18.125 11.607 18.125 10C18.1227 7.84581 17.266 5.78051 15.7427 4.25727C14.2195 2.73403 12.1542 1.87727 10 1.875ZM10 16.875C8.64026 16.875 7.31105 16.4718 6.18046 15.7164C5.04987 14.9609 4.16868 13.8872 3.64833 12.6309C3.12798 11.3747 2.99183 9.99237 3.2571 8.65875C3.52238 7.32513 4.17716 6.10013 5.13864 5.13864C6.10013 4.17715 7.32514 3.52237 8.65876 3.2571C9.99238 2.99183 11.3747 3.12798 12.631 3.64833C13.8872 4.16868 14.9609 5.04987 15.7164 6.18045C16.4718 7.31104 16.875 8.64025 16.875 10C16.8729 11.8227 16.1479 13.5702 14.8591 14.8591C13.5702 16.1479 11.8227 16.8729 10 16.875ZM13.75 10C13.75 10.1658 13.6842 10.3247 13.5669 10.4419C13.4497 10.5592 13.2908 10.625 13.125 10.625H10.625V13.125C10.625 13.2908 10.5592 13.4497 10.4419 13.5669C10.3247 13.6842 10.1658 13.75 10 13.75C9.83424 13.75 9.67527 13.6842 9.55806 13.5669C9.44085 13.4497 9.375 13.2908 9.375 13.125V10.625H6.875C6.70924 10.625 6.55027 10.5592 6.43306 10.4419C6.31585 10.3247 6.25 10.1658 6.25 10C6.25 9.83424 6.31585 9.67527 6.43306 9.55806C6.55027 9.44085 6.70924 9.375 6.875 9.375H9.375V6.875C9.375 6.70924 9.44085 6.55027 9.55806 6.43306C9.67527 6.31585 9.83424 6.25 10 6.25C10.1658 6.25 10.3247 6.31585 10.4419 6.43306C10.5592 6.55027 10.625 6.70924 10.625 6.875V9.375H13.125C13.2908 9.375 13.4497 9.44085 13.5669 9.55806C13.6842 9.67527 13.75 9.83424 13.75 10Z" fill="currentColor" /></svg> Add List Row
        </button>
        </Modal.Body>

        <Modal.Footer>
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

export default AddBranchSiteDetails