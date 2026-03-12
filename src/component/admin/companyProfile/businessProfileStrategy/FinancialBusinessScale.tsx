"use client";
import React, { useState } from "react";
import { Form } from "react-bootstrap";

const FinancialBusinessScale = () => {

  const [selected, setSelected] = useState("1");

  return (
    <div className="row">
      <div className="col-xxxl-3 col-md-6 mb-md-4 mb-3">
        <div className={`radion-box ${selected === "1" ? "active" : ""}`} onClick={() => setSelected("1")}>
          <Form.Group className="form-group">
            <Form.Label className="m-0 p-0">Below $2999</Form.Label>
            <Form.Check type="radio" checked={selected === "1"} onChange={() => setSelected("1")}/>
          </Form.Group>
        </div>
      </div>

      <div className="col-xxxl-3 col-md-6 mb-md-4 mb-3">
        <div className={`radion-box ${selected === "2" ? "active" : ""}`} onClick={() => setSelected("2")}>
          <Form.Group className="form-group">
            <Form.Label className="m-0 p-0">$2999 to $4999</Form.Label>
            <Form.Check type="radio" checked={selected === "2"} onChange={() => setSelected("2")}/>
          </Form.Group>
        </div>
      </div>

      <div className="col-xxxl-3 col-md-6 mb-md-4 mb-3">
        <div className={`radion-box ${selected === "3" ? "active" : ""}`} onClick={() => setSelected("3")}>
          <Form.Group className="form-group">
            <Form.Label className="m-0 p-0">$4999 to $5999</Form.Label>
            <Form.Check type="radio" checked={selected === "3"} onChange={() => setSelected("3")}/>
          </Form.Group>
        </div>
      </div>

      <div className="col-xxxl-3 col-md-6 mb-md-4 mb-3">
        <div className={`radion-box ${selected === "4" ? "active" : ""}`} onClick={() => setSelected("4")}>
          <Form.Group className="form-group">
            <Form.Label className="m-0 p-0">Above $59999</Form.Label>
            <Form.Check type="radio" checked={selected === "4"} onChange={() => setSelected("4")}/>
          </Form.Group>
        </div>
      </div>

    </div>
  );
};

export default FinancialBusinessScale;