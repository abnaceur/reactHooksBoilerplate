import { combineReducers } from 'redux';
import { routerReducer } from "react-router-redux";
import authReducer from './reducers/userReducers/auth_reducer';

const reducers = combineReducers({
  router: routerReducer,
  auth: authReducer,
});

export default reducers;