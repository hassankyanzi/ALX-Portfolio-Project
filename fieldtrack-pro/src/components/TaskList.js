// src/components/TaskList.js
import React from 'react';
import './TaskList.css';

const TaskList = () => {
  return (
    <div className="task-list-container">
      <button>Back</button>
      <h2>Today's Tasks</h2>
      <div className="task-item">
        <span>Task 1</span>
        <button>Start</button>
        <button>Details</button>
      </div>
      <div className="task-item">
        <span>Task 2</span>
        <button>Start</button>
        <button>Details</button>
      </div>
      <div className="task-item">
        <span>Task 3</span>
        <button>Start</button>
        <button>Details</button>
      </div>
    </div>
  );
};

export default TaskList;
