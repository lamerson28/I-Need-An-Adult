import React from 'react';
import { useState } from 'react';
import TaskCard from './TaskCard';
import styles from '../styles.scss';

const tasks = ['task1', 'task2', 'task3', 'task4', 'task5'];

export default function TaskList() {
  return (
    <div className='viewingAllTasks'>
      {tasks.map((task) => {
        return <TaskCard />;
      })}
    </div>
  );
}
