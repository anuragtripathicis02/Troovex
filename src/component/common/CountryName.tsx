"use client";

import React from "react";
import { Form } from "react-bootstrap";
import ReactFlagsSelect from "react-flags-select";

const CountryName = () => {
  const [selected, setSelected] = React.useState("IN");

  return (
    <div className="form-group flag-name-sec">
      <Form.Label>Country</Form.Label>
      <ReactFlagsSelect selected={selected} onSelect={(code) => setSelected(code)} searchable fullWidth={true} placeholder="Select Country" showSelectedLabel={true}  showOptionLabel={true} />
    </div>
  );
};

export default CountryName;
