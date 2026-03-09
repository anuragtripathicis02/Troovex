"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import PdfUpload from "@/component/common/PdfUpload";

const OrganizationIdentificationDetails = () => {
    return (
        <>
            <div className='row'>
                <div className='col-xxl-8 col-lg-6 col-md-12'>
                    <FloatingLabel controlId="floatingInput" label={<>Legal Organization Name <span className="text-danger">*</span></>} className="mb-4">
                        <Form.Control type="text" placeholder="Algeria Infra & Argo Co." />
                    </FloatingLabel>
                </div>
                <div className='col-xxl-4 col-lg-6 col-md-12'>
                    <FloatingLabel controlId="floatingSelect" label="Domain" className="mb-4">
                        <Form.Select aria-label="Floating label select example">
                            <option>Public Sector</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </FloatingLabel>
                </div>
            </div>
            <div className="row">
                <div className="col-xxl-8 col-lg-12 col-md-8">
                    <div className="row">
                        <div className='col-md-12'>
                            <FloatingLabel controlId="floatingInput" label={<>Trade Name / Brand Name <span className="text-danger">*</span></>} className="mb-4">
                                <Form.Control type="text" placeholder="Algeria Infra & Argo Co." />
                            </FloatingLabel>
                        </div>
                        <div className="col-md-6">
                            <FloatingLabel controlId="floatingSelect" label="Legal Form / Entity Type" className="mb-4">
                                <Form.Select aria-label="Floating label select example">
                                    <option>LLC</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </FloatingLabel>
                        </div>
                        <div className="col-md-6">
                            <FloatingLabel controlId="floatingInput" label="DUNS Number" className="mb-4">
                                <Form.Control type="text" placeholder="Algeria Infra & Argo Co." />
                            </FloatingLabel>
                        </div>
                        <div className="col-md-6">
                            <FloatingLabel controlId="floatingSelect" label="Registration Document Type" className="mb-4">
                                <Form.Select aria-label="Floating label select example">
                                    <option>Trade License</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </FloatingLabel>
                        </div>
                        <div className="col-md-6">
                            <FloatingLabel controlId="floatingInput" label="Trade License Number" className="mb-4">
                                <Form.Control type="text" placeholder="Algeria Infra & Argo Co." />
                            </FloatingLabel>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-4 col-lg-12 col-md-4">
                    <PdfUpload title="Upload Trade Licence" />
                </div>
                <div className='col-md-12'>
                    <FloatingLabel controlId="floatingInput" label="Trade License Number" className="mb-4">
                        <Form.Control type="text" placeholder="Holding Organization Name (if applicable)" />
                    </FloatingLabel>
                </div>
            </div>
        </>
    )
}

export default OrganizationIdentificationDetails
