import React from 'react';
import { Link } from 'react-router-dom';
import TaskList from './TaskList';
import styles from '../styles.scss';

export default function Dashboard() {
  return (
    <div className="viewAllTask">
      <TaskList />
      <div className="dashboardButtons">
        <div className="taskCreaterButton">
          <Link to="/createTask">Create a task</Link>
        </div>
      </div>
    </div>
  );
}
