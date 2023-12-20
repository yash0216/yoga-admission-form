import React, { useState } from "react";
import "./AdmissionForm.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdmissionForm = () => {
  const initialFormData = {
    name: "",
    email: "",
    age: 0,
    batch: "",
  };

  const [formData, setFormData] = useState(initialFormData);

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
        setFormData(initialFormData);
        // Additional logic if needed
      } else {
        toast.error(
          `error: Either check your age between 18 and 65 Or move to next month to change the batch`,
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
