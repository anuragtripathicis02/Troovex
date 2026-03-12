"use client";
import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Arrowaccordion from "@/component/common/Icons/Arrowaccordion";
import CompanyOverview from "./businessProfileStrategy/CompanyOverview";
import IndustryClassification from "./businessProfileStrategy/IndustryClassification";
import BusinessActivities from "./businessProfileStrategy/BusinessActivities";
import BusinessModelMarketFocus from "./businessProfileStrategy/BusinessModelMarketFocus";
import CapacityCompetitiveness from "./businessProfileStrategy/CapacityCompetitiveness";
import FinancialBusinessScale from "./businessProfileStrategy/FinancialBusinessScale";
import OwnershipDetails from "./ownershipGovernance/OwnershipDetails";
import OrganizationalStructur from "./ownershipGovernance/OrganizationalStructur";

const OwnershipGovernance = () => {
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
                <h4 className='mb-0'>Ownership & Governance</h4>
                <p>Defines decision-making authority and accountability.</p>
            </div>

            <div className='accordion-sec sec-company-main'>
                <Accordion activeKey={activeKey}  onSelect={(k) => {if (typeof k === "string" || k === null) {setActiveKey(k);}}}>
                    <Accordion.Item eventKey="0" className={completed.includes("0") ? "completed" : ""}>
                        <Accordion.Header className="position-relative">
                            <div className="me-auto d-flex align-items-center gap-2">
                                <span className={`radio ${completed.includes("0") ? "completed" : ""}`}></span>
                                <span>Ownership Details</span>
                            </div>
                            <Arrowaccordion />
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="accordion-detail-box">
                                <OwnershipDetails />
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
                                <span>Company Size Classification</span>
                            </div>
                            <Arrowaccordion />
                        </Accordion.Header>
                        <Accordion.Body>
                            Second
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
                                <span>Organizational Structure</span>
                            </div>
                            <Arrowaccordion />
                        </Accordion.Header>
                        <Accordion.Body>
                            <OrganizationalStructur/>
                            <div className="card-foot">
                                <hr></hr>
                                <div className="d-flex align-items-center justify-content-end">
                                    <button className="btn-outline fill-btn rs-link" onClick={() => handleSave("2", "3")}>Save</button>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className={completed.includes("3") ? "completed" : ""}>
                        <Accordion.Header className="position-relative">
                            <div className="me-auto d-flex align-items-center gap-2">
                                <span className={`radio ${completed.includes("3") ? "completed" : ""}`}></span>
                                <span>Authority & Legal Powers</span>
                            </div>
                            <Arrowaccordion />
                        </Accordion.Header>
                        <Accordion.Body>
                            fourth
                            <div className="card-foot">
                                <hr></hr>
                                <div className="d-flex align-items-center justify-content-end">
                                    <button className="btn-outline fill-btn rs-link" onClick={() => handleSave("3", "4")}>Save</button>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4" className={completed.includes("4") ? "completed" : ""}>
                        <Accordion.Header className="position-relative">
                            <div className="me-auto d-flex align-items-center gap-2">
                                <span className={`radio ${completed.includes("4") ? "completed" : ""}`}></span>
                                <span>Group & Corporate Relationships</span>
                            </div>
                            <Arrowaccordion />
                        </Accordion.Header>
                        <Accordion.Body>
                            Fifth
                            <div className="card-foot">
                                <hr></hr>
                                <div className="d-flex align-items-center justify-content-end">
                                    <button className="btn-outline fill-btn rs-link" onClick={() => handleSave("4", "5")}>Save</button>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5" className={completed.includes("5") ? "completed" : ""}>
                        <Accordion.Header className="position-relative">
                            <div className="me-auto d-flex align-items-center gap-2">
                                <span className={`radio ${completed.includes("5") ? "completed" : ""}`}></span>
                                <span>Locations & Physical Presence</span>
                            </div>
                            <Arrowaccordion />
                        </Accordion.Header>
                        <Accordion.Body>
                            Sixth
                            <div className="card-foot">
                                <hr></hr>
                                <div className="d-flex align-items-center justify-content-end">
                                    <button className="btn-outline fill-btn rs-link" onClick={() => handleSave("5", "6")}>Save</button>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
          
        </div>
  )
}


export default OwnershipGovernance