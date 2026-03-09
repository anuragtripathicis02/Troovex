"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import PdfUpload from "@/component/common/PdfUpload";
import OnlyFlagPhoneInput from "@/component/common/OnlyFlagPhoneInput";

const SocialAndEmploymentIdentifiers = () => {
    return (
        <>
        <div className='row'>
            <div className='col-md-4'>
                <FloatingLabel controlId="floatingInput" label="Employer Identification Number" className="mb-4">
                    <Form.Control type="text" placeholder="1234567890" />
                </FloatingLabel>
            </div>
            <div className='col-md-4'>
                <FloatingLabel controlId="floatingInput" label="CASNOS Affiliation Number" className="mb-4">
                    <Form.Control type="text" placeholder="1234567890" />
                </FloatingLabel>
            </div>
            <div className='col-md-4'>
                <FloatingLabel controlId="floatingInput" label="Criminal Record Validity Date" className="mb-4">
                    <Form.Control type="text" placeholder="1234567890" />
                </FloatingLabel>
            </div>
            <div className='col-md-4 mb-4'>
                <Form.Label className="fs-14">CNAS Certificate Attachment</Form.Label>
                <PdfUpload title="Upload NIF Document" />
            </div>
            <div className='col-md-4 mb-4'>
                <Form.Label className="fs-14">CASNOS Certificate Attachment</Form.Label>
                <PdfUpload title="Upload Tax Roll" />
            </div>
            <div className='col-md-4 mb-4'>
                <Form.Label className="fs-14">Criminal Record / Casier Judiciaire</Form.Label>
                <PdfUpload title="Upload NIS Document" />
            </div>
        </div>
         <div className="card-foot">
                <hr></hr>
                <div className="d-flex align-items-center justify-content-end">
                    <button className="btn-outline fill-btn rs-link">Save</button>
                </div>
            </div>
    </>
    )
}

export default SocialAndEmploymentIdentifiers
