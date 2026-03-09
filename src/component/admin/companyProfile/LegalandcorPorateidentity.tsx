"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

import Accordion from 'react-bootstrap/Accordion';
import Arrowaccordion from "@/component/common/Arrowaccordion";
import OrganizationIdentificationDetails from "./legalandcorporateidentity/OrganizationIdentificationDetails";
import IncorporationAndAddressDetails from "./legalandcorporateidentity/IncorporationAndAddressDetails";
import TaxandStatutoryIdentifiers from "./legalandcorporateidentity/TaxandStatutoryIdentifiers";


const LegalandcorPorateidentity = () => {
    return (
        <div className='card-wrapper'>
            <div className="card-head">
                <h4 className='mb-0'>Legal & Corporate Identity</h4>
                <p>These fields establish the company’s official legal existence.</p>
            </div>
            <div className='accordion-sec sec-company-main'>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className=" position-relative">
                            <div className="me-auto d-flex align-items-center gap-2">
                                <span className="radio completed"></span>
                                <span>Organization Identification Details</span>
                            </div>
                            <Arrowaccordion />
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="accordion-detail-box">
                                <OrganizationIdentificationDetails/>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header className=" position-relative">
                            <div className="me-auto d-flex align-items-center gap-2">
                                <span className="radio"></span>
                                <span>Incorporation & Address Details</span>
                            </div>
                            <Arrowaccordion />
                        </Accordion.Header>
                        <Accordion.Body>
                           <IncorporationAndAddressDetails/>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header className=" position-relative">
                            <div className="me-auto d-flex align-items-center gap-2">
                                <span className="radio"></span>
                                <span>Tax & Statutory Identifiers</span>
                            </div>
                            <Arrowaccordion />
                        </Accordion.Header>
                        <Accordion.Body>
                            <TaxandStatutoryIdentifiers/>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>

    )
}

export default LegalandcorPorateidentity
