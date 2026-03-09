"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import PdfUpload from "@/component/common/PdfUpload";

const TaxandStatutoryIdentifiers = () => {
    return (
        <>
            <div className='row'>
                <div className='col-md-4'>
                    <FloatingLabel controlId="floatingInput" label="Tax Identification Number (NIF)" className="mb-4">
                        <Form.Control type="text" placeholder="Holding Organization Name (if applicable)" />
                    </FloatingLabel>
                </div>
                <div className='col-md-4'>
                    <FloatingLabel controlId="floatingInput" label="Tax Roll Validity Date" className="mb-4">
                        <Form.Control type="text" placeholder="Holding Organization Name (if applicable)" />
                    </FloatingLabel>
                </div>
                <div className='col-md-4'>
                    <FloatingLabel controlId="floatingInput" label="NIS Number" className="mb-4">
                        <Form.Control type="text" placeholder="Holding Organization Name (if applicable)" />
                    </FloatingLabel>
                </div>
                <div className="col-md-4 mb-4">
                    <Form.Label className="fs-14">NIF Document</Form.Label>
                    <PdfUpload title="Upload NIF Document" />
                </div>
                <div className="col-md-4 mb-4">
                    <Form.Label className="fs-14">Tax Roll (Extrait de Rôle)</Form.Label>
                    <PdfUpload title="Upload Tax Roll (Extrait de Rôle)" />
                </div>
                <div className="col-md-4 mb-4">
                    <Form.Label className="fs-14">NIS Document</Form.Label>
                    <PdfUpload title="Upload NIS Document" />
                </div>
                <div className="col-md-4 mb-4">
                    <Form.Label className="fs-14">Certificate of Legal Deposit</Form.Label>
                    <PdfUpload title="Upload Certificate of Legal Deposit of Company Accounts" />
                </div>
                <div className="col-md-4 mb-4">
                    <Form.Label className="fs-14">VAT Certificate</Form.Label>
                    <PdfUpload title="Upload VAT Certificate" />
                </div>
                <div className='col-md-4 mb-4'>
                    <div className="mt-4 pt-1">
                        <FloatingLabel controlId="floatingInput" label="VAT Number" >
                            <Form.Control type="text" placeholder="1234567890" />
                        </FloatingLabel>
                    </div>
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

export default TaxandStatutoryIdentifiers
