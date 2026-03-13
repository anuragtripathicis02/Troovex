"use client";
import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Arrowaccordion from "@/component/common/Icons/Arrowaccordion";
import ProcurementCategorySetup from "./procurementCategoriesPurchasing/ProcurementCategorySetup";
import ProcurementRulesandControls from "./procurementCategoriesPurchasing/ProcurementRulesandControls";
import SupplierClassificationModel from "./vendorSegmentationKraljicMatrix/SupplierClassificationModel";


const VendorSegmentationKraljicMatrix = () => {
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
                <h4 className='mb-0'>Vendor Segmentation – Kraljic Matrix</h4>
                <p>Procurement Organization, Human Resources Capabilities & Contacts</p>
            </div>

            <div className='accordion-sec sec-company-main'>
                <Accordion activeKey={activeKey} onSelect={(k) => { if (typeof k === "string" || k === null) { setActiveKey(k); } }}>
                    <Accordion.Item eventKey="0" className={completed.includes("0") ? "completed" : ""}>
                        <Accordion.Header className="position-relative">
                            <div className="me-auto d-flex align-items-center gap-2">
                                <span className={`radio ${completed.includes("0") ? "completed" : ""}`}></span>
                                <span>Supplier Classification Model</span>
                            </div>
                            <Arrowaccordion />
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="accordion-detail-box">
                                <SupplierClassificationModel />
                                <div className="card-foot">
                                    <hr></hr>
                                    <div className="d-flex align-items-center justify-content-end">
                                        <button className="btn-outline fill-btn rs-link" onClick={() => handleSave("0", "1")} >Save</button>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

        </div>
    )
}

export default VendorSegmentationKraljicMatrix