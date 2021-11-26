import React from 'react';
import { useState, useEffect } from 'react';
import TaskCard from './TaskCard';
import styles from '../styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import {getTasksActionCreator} from '../actions/actions';

const tasks = ['task1', 'task2', 'task3', 'task4', 'task5'];

export default function TaskList() {
  const dispatch = useDispatch();
  const taskState = useSelector(state => state.tasks);
  // console.log(taskState);

  useEffect(()=>{
    dispatch(getTasksActionCreator())
  },[])
  // return (
  //   <div className="viewingAllTasksHeader">
  //     <h2>Viewing All Tasks</h2>
  //     <div>
  //       {taskState.taskList.length === 0 && <h1>No tasks yet</h1>}
  //     </div>
  //     <div className="viewingAllTasks">
  //       {taskState.taskList.map((task) => {
  //         return <TaskCard />;
  //       })}
  //     </div>
  //   </div>
  // );

  return taskState.tasksLoaded === false ? (
    <div className="viewingAllTasksHeader">
    <h2>All Tasks</h2>
    <h1>Loading...</h1>
    </div>
  ) : taskState.taskList.length === 0 ? (
       <div className="viewingAllTasksHeader">
          <h2>All Tasks</h2>
          <h1>No tasks yet!</h1>
         </div>
  ) : (
    <div className="viewingAllTasksHeader">
          <h2>All Tasks</h2>
          {taskState.taskList.map((task) => {
            return <TaskCard task={task} key={task}/>;
        })}
         </div>
  )
}
