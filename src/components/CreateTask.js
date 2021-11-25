import React from 'react';
import styles from '../styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  enterTaskTitleActionCreator,
  enterRewardActionCreator,
  addTaskActionCreator,
} from '../actions/actions';
import { useNavigate } from 'react-router-dom';

export default function CreateTask() {
  const dispatch = useDispatch();
  const taskState = useSelector((state) => state.task);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      title: taskState.title,
      reward: taskState.reward,
      done: taskState.done,
    };
    dispatch(addTaskActionCreator(task));
    navigate('/dashboard');
  };

  return (
    <div className='createTaskStyling'>
      <h2 className='formTitle'>Create New Task</h2>
      <form className='taskForm' onSubmit={handleSubmit}>
        <div className='taskAndRewardInputDiv'>
        <label className="taskCreaterForm" id="taskCreaterForm">
          <input
          placeholder='Task'
            onChange={(e) =>
              dispatch(enterTaskTitleActionCreator(e.target.value))
            }
            type="text"
            id="enterTask"
          />
        </label>
        <label className="enterReward" id="enterReward">

          <input  placeholder='Reward'
            onChange={(e) => dispatch(enterRewardActionCreator(e.target.value))}
            type="text"
            id="enterReward"
          />
        </label>
        </div>
        <button id="submitTaskButton">
        <div>Add Task</div>
      </button>
      </form>
    </div>
  );
}
