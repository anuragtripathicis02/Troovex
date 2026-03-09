"use client";
import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Arrowaccordion from "@/component/common/Arrowaccordion";

import OrganizationIdentificationDetails from "./legalandcorporateidentity/OrganizationIdentificationDetails";
import IncorporationAndAddressDetails from "./legalandcorporateidentity/IncorporationAndAddressDetails";
import TaxandStatutoryIdentifiers from "./legalandcorporateidentity/TaxandStatutoryIdentifiers";

const LegalandcorPorateidentity = () => {
    const [activeKey, setActiveKey] = useState<string | null>("0");
    const [completed, setCompleted] = useState<string[]>([]);
    const handleSave = (current: string, next: string) => {
        if (!completed.includes(current)) {
            setCompleted((prev) => [...prev, current]);
        }
        setActiveKey(next);
    };
    return (
        <div className='card-wrapper'>
            <div className="card-head">
                <h4 className='mb-0'>Legal & Corporate Identity</h4>
                <p>These fields establish the company’s official legal existence.</p>
            </div>

            <div className='accordion-sec sec-company-main'>
                <Accordion activeKey={activeKey}  onSelect={(k) => {if (typeof k === "string" || k === null) {setActiveKey(k);}}}>
                    <Accordion.Item eventKey="0" className={completed.includes("0") ? "completed" : ""}>
                        <Accordion.Header className="position-relative">
                            <div className="me-auto d-flex align-items-center gap-2">
                                <span className={`radio ${completed.includes("0") ? "completed" : ""}`}></span>
                                <span>Organization Identification Details</span>
                            </div>
                            <Arrowaccordion />
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="accordion-detail-box">
                                <OrganizationIdentificationDetails />
                                <div className="card-foot">
                                    <hr></hr>
                                    <div className="d-flex align-items-center justify-content-end">
                                        <button className="btn-outline fill-btn rs-link"  onClick={() => handleSave("0", "1")} >Save</button>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className={completed.includes("1") ? "completed" : ""}>
                        <Accordion.Header className="position-relative">
                            <div className="me-auto d-flex align-items-center gap-2">
                                <span className={`radio ${completed.includes("1") ? "completed" : ""}`}></span>
                                <span>Incorporation & Address Details</span>
                            </div>
                            <Arrowaccordion />
                        </Accordion.Header>
                        <Accordion.Body>
                            <IncorporationAndAddressDetails />
                            <div className="card-foot">
                                <hr></hr>
                                <div className="d-flex align-items-center justify-content-end">
                                    <button className="btn-outline fill-btn rs-link" onClick={() => handleSave("1", "2")}>Save</button>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className={completed.includes("2") ? "completed" : ""}>
                        <Accordion.Header className="position-relative">
                            <div className="me-auto d-flex align-items-center gap-2">
                                <span className={`radio ${completed.includes("2") ? "completed" : ""}`}></span>
                                <span>Tax & Statutory Identifiers</span>
                            </div>
                            <Arrowaccordion />
                        </Accordion.Header>
                        <Accordion.Body>
                            <TaxandStatutoryIdentifiers />
                            <div className="card-foot">
                                <hr></hr>
                                <div className="d-flex align-items-center justify-content-end">
                                    <button className="btn-outline fill-btn rs-link" onClick={() => handleSave("2", "")}>Save</button>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default LegalandcorPorateidentity;