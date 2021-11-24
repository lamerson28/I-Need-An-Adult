import * as types from '../constants/actionTypes';

//initial state
const taskState = {
  title: '',
  reward: '',
  done: false,
};

const taskReducer = (state = taskState, action) => {
  switch (action.type) {
    case types.ENTER_TASK_TITLE:
      const changedTitle = {
        ...state,
        title: action.payload,
      };
      return changedTitle;
    case types.ENTER_REWARD:
      const changedReward = {
        ...state,
        reward: action.payload,
      };
      return changedReward;
    case types.ADD_TASK_SUBMIT:
      const resetState = {
        ...state,
        title: '',
        reward: '',
        done: false,
      };
      return resetState;

    default:
      return state;
  }
};

export default taskReducer;
