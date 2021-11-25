import React from 'react';
import { Link } from 'react-router-dom';
import TaskList from './TaskList';

export default function Dashboard() {
  return (
    <div className="viewAllTask">
      <TaskList />
      <div className="dashboardButtons">
        <div className="taskCreaterButton">
          <Link to="/createTask">Create a Task</Link>
        </div>
      </div>
    </div>
  );
}
