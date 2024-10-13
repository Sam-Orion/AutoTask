import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get('http://localhost:5000/tasks');
      setTasks(response.data);
    };
    fetchTasks();
  }, []);

  return (
    <div className="App">
      <h1>AutoTask Dashboard</h1>
      <TaskForm />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
