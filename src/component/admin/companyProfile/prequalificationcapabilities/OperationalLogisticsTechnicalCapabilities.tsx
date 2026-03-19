"use client";
import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Arrowaccordion from "@/component/common/Icons/Arrowaccordion";
import WarehousingStorage from "./operationalLogisticsTechnicalCapabilities/WarehousingStorage";
import DeliveryLogistics from "./operationalLogisticsTechnicalCapabilities/DeliveryLogistics";
import EquipmentTechnologyTools from "./operationalLogisticsTechnicalCapabilities/EquipmentTechnologyTools";
import QualityProductionControls from "./operationalLogisticsTechnicalCapabilities/QualityProductionControls";


const OperationalLogisticsTechnicalCapabilities = () => {
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
        <h4 className='mb-0'>Operational, Logistics & Technical Capabilities</h4>
        <p>Prequalification & Capabilities (PQQ)</p>
      </div>

      <div className='accordion-sec sec-company-main'>
        <Accordion activeKey={activeKey} onSelect={(k) => { if (typeof k === "string" || k === null) { setActiveKey(k); } }}>
          <Accordion.Item eventKey="0" className={completed.includes("0") ? "completed" : ""}>
            <Accordion.Header className="position-relative">
              <div className="me-auto d-flex align-items-center gap-2">
                <span className={`radio ${completed.includes("0") ? "completed" : ""}`}></span>
                <span>Warehousing & Storage</span>
              </div>
              <Arrowaccordion />
            </Accordion.Header>
            <Accordion.Body>
              <div className="accordion-detail-box">
                <WarehousingStorage />
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
        <Accordion activeKey={activeKey} onSelect={(k) => { if (typeof k === "string" || k === null) { setActiveKey(k); } }}>
          <Accordion.Item eventKey="1" className={completed.includes("1") ? "completed" : ""}>
            <Accordion.Header className="position-relative">
              <div className="me-auto d-flex align-items-center gap-2">
                <span className={`radio ${completed.includes("1") ? "completed" : ""}`}></span>
                <span>Delivery & Logistics</span>
              </div>
              <Arrowaccordion />
            </Accordion.Header>
            <Accordion.Body>
              <div className="accordion-detail-box">
                <DeliveryLogistics />
                <div className="card-foot">
                  <hr></hr>
                  <div className="d-flex align-items-center justify-content-end">
                    <button className="btn-outline fill-btn rs-link" onClick={() => handleSave("1", "2")} >Save</button>
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion activeKey={activeKey} onSelect={(k) => { if (typeof k === "string" || k === null) { setActiveKey(k); } }}>
          <Accordion.Item eventKey="2" className={completed.includes("2") ? "completed" : ""}>
            <Accordion.Header className="position-relative">
              <div className="me-auto d-flex align-items-center gap-2">
                <span className={`radio ${completed.includes("2") ? "completed" : ""}`}></span>
                <span>Equipment, Technology & Tools</span>
              </div>
              <Arrowaccordion />
            </Accordion.Header>
            <Accordion.Body>
              <div className="accordion-detail-box">
                <EquipmentTechnologyTools />
                <div className="card-foot">
                  <hr></hr>
                  <div className="d-flex align-items-center justify-content-end">
                    <button className="btn-outline fill-btn rs-link" onClick={() => handleSave("2", "3")} >Save</button>
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion activeKey={activeKey} onSelect={(k) => { if (typeof k === "string" || k === null) { setActiveKey(k); } }}>
          <Accordion.Item eventKey="3" className={completed.includes("3") ? "completed" : ""}>
            <Accordion.Header className="position-relative">
              <div className="me-auto d-flex align-items-center gap-2">
                <span className={`radio ${completed.includes("3") ? "completed" : ""}`}></span>
                <span>Quality & Production Controls</span>
              </div>
              <Arrowaccordion />
            </Accordion.Header>
            <Accordion.Body>
              <div className="accordion-detail-box">
                <QualityProductionControls />
                <div className="card-foot">
                  <hr></hr>
                  <div className="d-flex align-items-center justify-content-end">
                    <button className="btn-outline fill-btn rs-link" onClick={() => handleSave("3", "")} >Save</button>
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

export default OperationalLogisticsTechnicalCapabilities