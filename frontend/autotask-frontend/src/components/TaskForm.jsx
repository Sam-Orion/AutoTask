import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState({ title: '', deadline: '', priority: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/tasks', task);
    setTask({ title: '', deadline: '', priority: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task title"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
        required
      />
      <input
        type="datetime-local"
        value={task.deadline}
        onChange={(e) => setTask({ ...task, deadline: e.target.value })}
        required
      />
      <select
        value={task.priority}
        onChange={(e) => setTask({ ...task, priority: e.target.value })}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
