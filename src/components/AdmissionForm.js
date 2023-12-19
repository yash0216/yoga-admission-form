// src/components/AdmissionForm.js

import React, { useState } from "react";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    selectedBatch: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Make API call to backend with formData
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
      />

      <label>Age:</label>
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleInputChange}
      />

      <label>Select Batch:</label>
      <select
        name="selectedBatch"
        value={formData.selectedBatch}
        onChange={handleInputChange}
      >
        <option value="">Select Batch</option>
        <option value="6-7AM">6-7AM</option>
        <option value="7-8AM">7-8AM</option>
        <option value="8-9AM">8-9AM</option>
        <option value="5-6PM">5-6PM</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
};

export default AdmissionForm;
