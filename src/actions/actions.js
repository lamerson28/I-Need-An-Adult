import * as types from '../constants/actionTypes';

export const toggleSignupActionCreator = () => ({
  type: types.LOGIN_TOGGLE,
});

export const enterUsernameActionCreator = (input) => ({
  type: types.ENTER_USERNAME,
  payload: input,
});

export const enterEmailActionCreator = (input) => ({
  type: types.ENTER_EMAIL,
  payload: input,
});

export const enterPasswordActionCreator = (input) => ({
  type: types.ENTER_PASSWORD,
  payload: input,
});

export const registerSubmitActionCreator = (user) => {
  return (dispatch) => {
    fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: user.username,
        email: user.email,
        password: user.password,
      }),
    })
      .then((response) => {
        console.log(response);
        dispatch({ type: types.REGISTER_SUBMIT });
      })
      .catch((err) => console.log(err));
  };
};

export const loginSubmitActionCreator = (user) => {
  return (dispatch) => {
    fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    })
      .then((response) => {
        console.log(response);
        dispatch({ type: types.LOGIN_SUBMIT });
      })
      .catch((err) => console.log(err));
  };
};

export const getTasksActionCreator = () => {
  return (dispatch) => {
    fetch('/api/tasks')
      .then((response) => response.json())
      // .then((data) => console.log(data))
      .then(data => dispatch({type: types.GET_TASKS, payload: data}))
      .catch((error) => console.error(error));
  };
};

export const enterTaskTitleActionCreator = (input) => ({
  type: types.ENTER_TASK_TITLE,
  payload: input,
});

export const enterRewardActionCreator = (input) => ({
  type: types.ENTER_REWARD,
  payload: input,
});

export const addTaskActionCreator = (task) => {
  return (dispatch) => {
    fetch('/api/users', {
      //change post route to match backend
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        taskname: task.taskname,
        rewards: task.rewards,
        completed: task.completed,
      }),
    })
      .then((response) => {
        console.log(response);
        dispatch({ type: types.ADD_TASK_SUBMIT });
      })
      .catch((err) => console.log(err));
  };
};
