// TaskForm.js
import axios from 'axios';
import React, { useState } from 'react';

const TaskForm = () => {
  const [task, setTask] = useState({ name: '', dueDate: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:5000/tasks', task);  // Post task to Flask backend
      alert('Task added successfully');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={task.name}
        onChange={(e) => setTask({ ...task, name: e.target.value })}
        placeholder="Task Name"
        required
      />
      <input
        type="date"
        name="dueDate"
        value={task.dueDate}
        onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
