import React from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const Dashboard = ({ handleLogout, tasks }) => {
  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
      <TaskForm />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Dashboard;
