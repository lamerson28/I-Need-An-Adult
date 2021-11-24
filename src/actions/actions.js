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
