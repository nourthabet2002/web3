import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Section4 = () => {
  const navigate = useNavigate();
  const [task, setTask] = useState({
    name: "",
    description: "",
    deadline: ""
  });

  const handleInputChange = (field, value) => {
    setTask({ ...task, [field]: value });
  };

  const addTask = () => {
    axios
      .post("http://localhost:3005/add", task)
      .then(response => {
        console.log("Task added:", response.data); // Assuming the server responds with the added task
        // Reset the form fields after adding a task
        setTask({
          name: "",
          description: "",
          deadline: ""
        });
      })
      .catch(error => {
        console.error("Failed to add task:", error);
        // Handle the error appropriately, e.g., display an error message
      });
  };

  return (
    <div className='Section4'>
      <label>Name</label>
      <input
        type="text"
        value={task.name}
        onChange={(e) => handleInputChange("name", e.target.value)}
      />

      <label>Description</label>
      <input
        type="text"
        value={task.description}
        onChange={(e) => handleInputChange("description", e.target.value)}
      />

      <label>Deadline</label>
      <input
        type="text"
        value={task.deadline}
        onChange={(e) => handleInputChange("deadline", e.target.value)}
      />

      <button onClick={addTask}>Add</button>
      <button>Delete</button>
      <button onClick={() => navigate("/tasks")}>Tasks</button>
    </div>
  );
}

export default Section4;
