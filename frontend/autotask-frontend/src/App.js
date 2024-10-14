// src/App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';  // Import TaskForm component

function App() {
  const [tasks, setTasks] = useState([]);  // State to hold fetched tasks

  // Fetch tasks from the backend when the component loads
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/tasks');  // GET request to fetch tasks
        setTasks(response.data);  // Update state with fetched tasks
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="App">
      <h1>Task Manager</h1>

      {/* Render the TaskForm component to add new tasks */}
      <TaskForm onTaskAdded={setTasks} />

      {/* Display the list of tasks */}
      <h2>Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <strong>{task.name}</strong> <br />
            <em>Due: {task.date} at {task.time}</em> <br />
            <span>Priority: {task.priority}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
