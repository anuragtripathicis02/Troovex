"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { DatePicker, TagInput } from 'rsuite';
import CountryName from "@/component/common/CountryName";
import LocationMap from "@/component/common/LocationMap";
const IncorporationAndAddressDetails = () => {
    
    return (
        <>
        <div className="row">
            <div className='col-xxl-4 col-lg-12'>
                <div className="calendar-box floating-calendar-box mb-4 position-relative">
                    <Form.Label >Date of Incorporation <span className="text-danger">*</span> </Form.Label>
                    <DatePicker className="w-100" />
                </div>

            </div>
            <div className='col-xxl-4 col-lg-12'>
                <div className="flag-code-sec mb-4 position-relative floting-box">
                    <CountryName label={<>Country of Incorporation {" "} <span className="text-danger">*</span></>}/>
                </div>
            </div> 
            <div className='col-xxl-4 col-lg-12'>
                <FloatingLabel controlId="floatingSelect" label={<>State / Province <span className="text-danger">*</span></>} className="mb-4">
                    <Form.Select aria-label="Floating label select example">
                        <option>Algeria</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </FloatingLabel>
            </div>
            <div className="col-md-12 mb-4">
                 <LocationMap />
            </div>
            <div className="col-md-12">
                <FloatingLabel controlId="floatingInput" label={<>Registered Legal Address <span className="text-danger">*</span></>} className="mb-4">
                    <Form.Control type="text" placeholder="Algeria Infra & Argo Co." />
                </FloatingLabel>
            </div>
            <div className="col-md-12">
                <FloatingLabel controlId="floatingInput" label={<>Operating Address (if different from registered address)</>} className="mb-4">
                    <Form.Control type="text" placeholder="Algeria Infra & Argo Co." />
                </FloatingLabel>
            </div>
        </div>
        </>
    )
}

export default IncorporationAndAddressDetails
