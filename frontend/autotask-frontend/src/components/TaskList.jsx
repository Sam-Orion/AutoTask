const TaskList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task.title} - {task.deadline} - {task.priority}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
