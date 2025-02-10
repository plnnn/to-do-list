import React from 'react';

const TaskItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span>{task.text}</span>
      <div>
        <button onClick={() => toggleComplete(task.id)}>
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;