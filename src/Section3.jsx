import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PersonForm = () => {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState({
    name: "",
    salary: "",
    position: "",
    joineddate: "",
    tasks: ""
  });

  const handleInputChange = (field, value) => {
    setNewPerson({ ...newPerson, [field]: value });
  };

  const addPerson = () => {
    setPersons([...persons, newPerson]);

    setNewPerson({  // Reset the form fields after adding a person
      name: "",
      salary: "",
      position: "",
      joineddate: "",
      tasks: ""
    });
    const apiUrl = "http://localhost:3005/add"; // Replace with your actual API endpoint

    // Create an object to hold the person data for the POST request
    const personData = {
      name: newPerson.name,
      salary: newPerson.salary,
      position: newPerson.position,
      joineddate: newPerson.joineddate,
      tasks: newPerson.tasks
    };

    // Send a POST request using Axios
    axios.post(apiUrl, personData)
      .then(response => {
        console.log("Person added successfully.");
        console.log("Response:", response.data); // Print the response data
        // You can handle success as needed.
      })
      .catch(error => {
        console.error("Failed to add person.");
        console.error("Error:", error); // Print the error details
        // Handle the error appropriately.
      });
  };

  const navigate = useNavigate();

  useEffect(() => {
    console.log(persons); // Log the updated persons array when it changes
  }, [persons]);

  return (
    <div className="section3">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={newPerson.name}
        onChange={(e) => handleInputChange("name", e.target.value)}
      />

      <label htmlFor="salary">Salary</label>
      <input
        type="number"
        id="salary"
        value={newPerson.salary}
        onChange={(e) => handleInputChange("salary", e.target.value)}
      />

      <label htmlFor="position">Position</label>
      <input
        type="text"
        id="position"
        value={newPerson.position}
        onChange={(e) => handleInputChange("position", e.target.value)}
      />

      <label htmlFor="joineddate">Joined Date</label>
      <input
        type="date"
        id="joineddate"
        value={newPerson.joineddate}
        onChange={(e) => handleInputChange("joineddate", e.target.value)}
      />

      <label htmlFor="tasks">Tasks</label>
      <input
        type="text"
        id="tasks"
        value={newPerson.tasks}
        onChange={(e) => handleInputChange("tasks", e.target.value)}
      />

      <button onClick={addPerson}>Add</button>
      <button onClick={() => setPersons([])}>Delete</button>
      <button onClick={() => navigate('/person')}>View Persons</button>
    </div>
  );
};

export default PersonForm;
