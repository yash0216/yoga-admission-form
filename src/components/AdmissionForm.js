import React, { useState } from "react";
import "./AdmissionForm.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: 0,
    batch: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://yoga-backend-n3le.onrender.com/api/enroll",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast.success("Enrolled successfully", {
          position: toast.POSITION.TOP_CENTER,
        });
        // Additional logic if needed
      } else {
        toast.error(
          "Failed to submit form to change the slot move to next month",
          {
            position: toast.POSITION.TOP_CENTER,
          }
        );
        // Handle error
      }
    } catch (error) {
      toast.error(`Error submitting form: ${error}`, {
        position: toast.POSITION.TOP_CENTER,
      });
      // Handle error
    }
  };

  // ... (remaining code)

  return (
    <>
      <ToastContainer />
      <form className="AdmissionForm" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <br></br>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <br></br>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
        />
        <br></br>
        <label>Select Batch:</label>
        <select
          name="batch"
          value={formData.batch}
          onChange={handleInputChange}
        >
          <option value="">Select Batch</option>
          <option value="6-7AM">6-7AM</option>
          <option value="7-8AM">7-8AM</option>
          <option value="8-9AM">8-9AM</option>
          <option value="5-6PM">5-6PM</option>
        </select>
        <br></br>
        <button className="submit" type="submit">
          Enroll
        </button>
      </form>
    </>
  );
};

export default AdmissionForm;
