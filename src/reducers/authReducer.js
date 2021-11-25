import * as types from '../constants/actionTypes';

//initial state
const authState = {
  loginClicked: false,
  // otherState: null
  username: '',
  email: '',
  password: '',
  isLoggedIn: false,
};

const authReducer = (state = authState, action) => {
  switch (action.type) {
    case types.LOGIN_TOGGLE:
      const toggled = {
        ...state,
        loginClicked: !state.loginClicked,
      };

      return toggled;

    case types.ENTER_USERNAME:
      const changedUserName = {
        ...state,
        username: action.payload,
      };

      return changedUserName;

    case types.ENTER_PASSWORD:
      const changePassword = {
        ...state,
        password: action.payload,
      };
      return changePassword;

    case types.ENTER_EMAIL:
      const changedEmail = {
        ...state,
        email: action.payload,
      };
      return changedEmail;

    case types.REGISTER_SUBMIT:
      const resetState = {
        ...state,
        email: '',
        username: '',
        password: '',
        isLoggedIn: true,
      };
      return resetState;

    default:
      return state;
  }
  // case types.ENTER_TASK_TITLE:
  //   const enterTaskTitle={
  //     ...state,

  //   }
};

export default authReducer;
