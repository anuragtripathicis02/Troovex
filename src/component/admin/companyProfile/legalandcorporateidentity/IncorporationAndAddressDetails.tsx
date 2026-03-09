"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { DatePicker, TagInput } from 'rsuite';
import CountryName from "@/component/common/CountryName";
const IncorporationAndAddressDetails = () => {
    return (
        <>
        <div className="row">
            <div className='col-md-4'>
                <div className="calendar-box floating-calendar-box mb-4 position-relative">
                    <Form.Label >Date of Incorporation <span className="text-danger">*</span> </Form.Label>
                    <DatePicker className="w-100" />
                </div>

            </div>
            <div className='col-md-4'>
                <div className="flag-code-sec mb-4 position-relative floting-box">
                    <CountryName />
                </div>
            </div> 
            <div className='col-md-4'>
                <FloatingLabel controlId="floatingSelect" label={<>State / Province <span className="text-danger">*</span></>} className="mb-4">
                        <Form.Select aria-label="Floating label select example">
                            <option>Algeria</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </FloatingLabel>
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

export default IncorporationAndAddressDetails
