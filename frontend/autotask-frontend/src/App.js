

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';  

function App() {
  const [tasks, setTasks] = useState([]);  


  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/tasks'); 
        setTasks(response.data);  
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="App">
      <h1>Task Manager</h1>

    
      <TaskForm onTaskAdded={setTasks} />

      
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
