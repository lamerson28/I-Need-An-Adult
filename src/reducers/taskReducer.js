import * as types from '../constants/actionTypes';

//initial state
const taskState = {
  taskname: '',
  rewards: '',
  completed: false,
  tasksList: [],
  tasksLoaded: false,
};

const taskReducer = (state = taskState, action) => {
  switch (action.type) {
    case types.GET_TASKS:
      const changes = {
        ...state,
        tasksList: action.payload,
        tasksLoaded: true,
      };
      if (action.payload.length === 0) {
        changes[tasksList] = [];
      }
      return changes;

    case types.ENTER_TASK_TITLE:
      const changedTitle = {
        ...state,
        taskname: action.payload,
      };
      return changedTitle;
    case types.ENTER_REWARD:
      const changedReward = {
        ...state,
        rewards: action.payload,
      };
      return changedReward;
    case types.ADD_TASK_SUBMIT:
      const resetState = {
        ...state,
        taskname: '',
        rewards: '',
        completed: false,
      };
      return resetState;

    default:
      return state;
  }
};

export default taskReducer;
