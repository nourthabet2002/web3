import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Holiday = () => {
  const navigate = useNavigate();
  const [holidayRequest, setHolidayRequest] = useState({
    personId: "",
    duration:""
    
  });


  const handleInputChange = (field, value) => {
    setHolidayRequest({ ...holidayRequest, [field]: value });
  };

  const addHolidayRequest = (personId,duration) => {
    // Define the URL for your server's endpoint
    const apiUrl = "http://localhost:3005/holiday/add";

    // Send a POST request to the server using Axios

    axios
      .post(apiUrl, {"personId":personId,"duration":duration})
      .then(response => {
        console.log("Holiday request added successfully.");
        console.log("Response:", response.data); // Print the response data from the server
        // Reset the form fields after adding a request
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

      <button onClick={addHolidayRequest()}>Add</button>
    </div>
  );
};

export default Holiday;

