import { combineReducers } from 'redux';
import signUpReducer from './signUpReducers/signUpReducer';

const rootReducer = combineReducers({ signUp: signUpReducer})

export default rootReducer;