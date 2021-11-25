import { combineReducers } from 'redux';
import authReducer from './authReducer';
import taskReducer from './taskReducer';

const reducers = combineReducers({
  auth: authReducer,
  tasks: taskReducer,
});

export default reducers;
