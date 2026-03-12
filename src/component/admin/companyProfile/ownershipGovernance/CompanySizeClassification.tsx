"use client";
import React, { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";

const CompanySizeClassification = () => {
    const [selected, setSelected] = useState("1");
  return (
    <div className="row">
        <div className="col-md-12">
            <Form.Label className="m-0 p-0 mb-2">Company Size</Form.Label>
        </div>
        <div className="col-xxxl-3 col-md-6 mb-md-4 mb-3">
            <div className={`radion-box ${selected === "1" ? "active" : ""}`} onClick={() => setSelected("1")}>
            <Form.Group className="form-group">
                <Form.Label className="m-0 p-0"> Micro <span className="d-block">(1-9 employees)</span></Form.Label>
                <Form.Check type="radio" checked={selected === "1"} onChange={() => setSelected("1")}/>
            </Form.Group>
            </div>
        </div>

        <div className="col-xxxl-3 col-md-6 mb-md-4 mb-3">
            <div className={`radion-box ${selected === "2" ? "active" : ""}`} onClick={() => setSelected("2")}>
            <Form.Group className="form-group">
                <Form.Label className="m-0 p-0">Small <span className="d-block">(10-49 employees)</span></Form.Label>
                <Form.Check type="radio" checked={selected === "2"} onChange={() => setSelected("2")}/>
            </Form.Group>
            </div>
        </div>

        <div className="col-xxxl-3 col-md-6 mb-md-4 mb-3">
            <div className={`radion-box ${selected === "3" ? "active" : ""}`} onClick={() => setSelected("3")}>
            <Form.Group className="form-group">
                <Form.Label className="m-0 p-0">Medium <span className="d-block">(50-249 employees)</span></Form.Label>
                <Form.Check type="radio" checked={selected === "3"} onChange={() => setSelected("3")}/>
            </Form.Group>
            </div>
        </div>

        <div className="col-xxxl-3 col-md-6 mb-md-4 mb-3">
            <div className={`radion-box ${selected === "4" ? "active" : ""}`} onClick={() => setSelected("4")}>
            <Form.Group className="form-group">
                <Form.Label className="m-0 p-0">Large <span className="d-block">(≥ 250 employees)</span></Form.Label>
                <Form.Check type="radio" checked={selected === "4"} onChange={() => setSelected("4")}/>
            </Form.Group>
            </div>
        </div>
        <div className="col-xxl-4 col-xl-6 mb-md-4 mb-3">
            <FloatingLabel controlId="floatingInput" label="Number of Employees" className="mb-3">
                <Form.Control type="text" placeholder="1254" />
            </FloatingLabel>
        </div>
        <div className="col-xxl-4 col-xl-6 mb-md-4 mb-3">
                <FloatingLabel controlId="floatingSelect" label="Annual Turnover Range">
                    <Form.Select aria-label="Annual Turnover Range">
                    <option>USD 10M</option>
                    <option value="1">USD 20M</option>
                    <option value="2">USD 30M</option>
                    <option value="3">USD 40M</option>
                    </Form.Select>
                </FloatingLabel>
        </div>

    </div>
  )
}

export default CompanySizeClassification