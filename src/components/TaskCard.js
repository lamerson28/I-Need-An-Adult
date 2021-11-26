import React from 'react';
import styles from '../styles.scss';

export default function TaskCard(props) {
  return (
    <div className="taskCardContainer">
      <h3>{props.task.taskname}</h3>
      <h4>{props.task.rewards}</h4>
    </div>
  );
}
