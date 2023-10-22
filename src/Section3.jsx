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

  const loadPersons = () => {
    const apiUrl = "http://localhost:3005/persons"; // Replace with your actual API endpoint for fetching persons

    axios.get(apiUrl)
      .then(response => {
        setPersons(response.data);
      })
      .catch(error => {
        console.error("Failed to fetch persons.");
        console.error("Error:", error); // Handle the error appropriately.
      });
  };

  const handleInputChange = (field, value) => {
    setNewPerson({ ...newPerson, [field]: value });
  };

  const addPerson = () => {
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

        // After successfully adding a person, reload the list of persons
        loadPersons();
      })
      .catch(error => {
        console.error("Failed to add person.");
        console.error("Error:", error); // Print the error details
        // Handle the error appropriately.
      });
  };

  const navigate = useNavigate();

  useEffect(() => {
    loadPersons(); // Call loadPersons when the component is mounted
  }, []); // Empty dependency array means it runs once on mount

  const handlePermissionClick = (personId,duration) => {
    // Create an object to hold the permission data (if needed)
    const permissionData = {
      personId: personId,
      duration: duration
      // Add any other permission-related data here
    };

    // Define your permission API endpoint
    const permissionApiUrl = "http://localhost:3005/permissions"; // Replace with your actual permission API endpoint

    // Send a POST request to the permission API
    axios.post(permissionApiUrl, permissionData)
      .then(response => {
        console.log(`Permission granted for person with ID: ${personId}`);
        // You can handle the response from the server if needed.
      })
      .catch(error => {
        console.error("Failed to grant permission.");
        console.error("Error:", error); // Handle the error appropriately.
      });
  };
  const [holidayDuration, setHolidayDuration] = useState("");

  const [showHolidayInput, setShowHolidayInput] = useState(null);

  const openHolidayInput = (personId) => {
    setShowHolidayInput(personId);
  };

  const closeHolidayInput = () => {
    setShowHolidayInput(null);
  };

  const sendHolidayRequest = (personId,duration) => {
   console.log(`Person ID: ${personId}, Duration: ${holidayDuration}`);

    // Define the URL for your server's endpoint
    const apiUrl = "http://localhost:3005/holiday/add";

    // Send a POST request to the server using Axios
  
    axios
      .post(apiUrl, {"personId" : personId,"duration": duration})
      .then(response => {
        console.log("Holiday request added successfully.");
        console.log("Response:", response.data); // Print the response data from the server
        // Reset the form fields after adding a request
      
      })
      .catch(error => {
        console.error("Failed to add holiday request:", error);
        // Handle the error appropriately, e.g., display an error message
      });
  

    closeHolidayInput();
  };


  return (
    <div className="section3">
      {/* ... (input fields and buttons) */}
      {persons.length > 0 ? (
        <div>
          <h2>List of Persons</h2>
          <ul>
            {persons.map((person) => (
              <li key={person._id}>
                <h3>{person.name}</h3>
                <p>Salary: {person.salary}</p>
                <p>Position: {person.position}</p>
                <p>Joined Date: {new Date(person.joinedDate).toLocaleDateString()}</p>
                {showHolidayInput === person._id ? (
                  <div>
                    <label htmlFor="holidayDuration">Holidays Duration:</label>
                    <input
                      type="text"
                      id="holidayDuration"
                      placeholder="Enter duration"
                      value={holidayDuration} // Set the initial value
                      onChange={(e) => setHolidayDuration(e.target.value)}
                    />
                    <button onClick={() => sendHolidayRequest(person._id,holidayDuration)}>Send</button>
                    <button onClick={closeHolidayInput}>Cancel</button>
                  </div>
                ) : (
                  <button onClick={() => openHolidayInput(person._id)}>Permission</button>
                )}
                {/* You can display tasks or other information as needed */}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No persons to display. Check your API endpoint and data.</p>
      )}
    </div>
  );
};
  


export default PersonForm;
