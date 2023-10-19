import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Holiday = () => {
  const navigate = useNavigate();
  const [holidayRequest, setHolidayRequest] = useState({
    FirstName: "",
    LastName: "",
    position: "",
    numberOfDays: ""
  });

  const handleInputChange = (field, value) => {
    setHolidayRequest({ ...holidayRequest, [field]: value });
  };

  const addHolidayRequest = () => {
    // Define the URL for your server's endpoint
    const apiUrl = "http://your-server-url.com/api/holiday-requests";

    // Send a POST request to the server using Axios
    axios
      .post(apiUrl, holidayRequest)
      .then(response => {
        console.log("Holiday request added successfully.");
        console.log("Response:", response.data); // Print the response data from the server
        // Reset the form fields after adding a request
        setHolidayRequest({
          FirstName: "",
          LastName: "",
          position: "",
          numberOfDays: ""
        });
      })
      .catch(error => {
        console.error("Failed to add holiday request:", error);
        // Handle the error appropriately, e.g., display an error message
      });
  };

  return (
    <div className="holiday">
      <h1>PERMISSION</h1>
      <label>First Name</label>
      <input
        type="text"
        value={holidayRequest.FirstName}
        onChange={(e) => handleInputChange("FirstName", e.target.value)}
      />

      <label>Last Name</label>
      <input
        type="text"
        value={holidayRequest.LastName}
        onChange={(e) => handleInputChange("LastName", e.target.value)}
      />

      <label>Position</label>
      <input
        type="text"
        value={holidayRequest.position}
        onChange={(e) => handleInputChange("position", e.target.value)}
      />

      <label>Number of Days</label>
      <input
        type="text"
        value={holidayRequest.numberOfDays}
        onChange={(e) => handleInputChange("numberOfDays", e.target.value)}
      />

      <button onClick={addHolidayRequest}>Add</button>
    </div>
  );
};

export default Holiday;

