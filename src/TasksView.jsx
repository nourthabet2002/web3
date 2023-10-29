import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const TasksView = () => {
  const navigate = useNavigate();


  const [tasks, setTasks] = useState([]);


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
      .post("http://localhost:3005/tasks/add", task)
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
  // get data //
  const loadTasks = () => {
    const apiUrl = "http://localhost:3005/tasks"; // Replace with your actual API endpoint for fetching persons

    axios.get(apiUrl)
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error("Failed to fetch persons.");
        console.error("Error:", error); // Handle the error appropriately.
      });
  };
  //
  useEffect(() => {
    loadTasks(); 
  }, []);
  //
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
        type="date"
        value={task.deadline}
        onChange={(e) => handleInputChange("deadline", e.target.value)}
      />

      <button onClick={addTask}>Add</button>
      <button>Delete</button>
      <button onClick={() => navigate("/tasks")}>Tasks</button>

      {tasks.length > 0 ? (
        <div>
          <h2>List of Tasks</h2>
          <ul>
            {tasks.map((task) => (
              <li key={task._id}>
                <h3>{task.name}</h3>
                <p>Description: {task.deadline}</p>
                <p>Deadline: {new Date(task.deadline).toLocaleDateString()}</p>


               
              
             
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No tasks to display. Check your API endpoint and data.</p>
      )}
    </div>
  );
}

export default TasksView;
