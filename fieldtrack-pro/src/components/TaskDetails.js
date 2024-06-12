// src/components/TaskDetails.js
import React from 'react';
import './TaskDetails.css';

const TaskDetails = () => {
  return (
    <div className="task-details-container">
      <button>Back</button>
      <h2>Task Details</h2>
      <div>Customer: [Name]</div>
      <div>Address: [Location]</div>
      <div>Appointment Time: [Time]</div>
      <div>Notes: [Details]</div>
      <button>Update Status</button>
    </div>
  );
};

export default TaskDetails;
