import { combineReducers } from 'redux';
import dataReducer from './signUpReducers/dataReducer';
import signInReducer from './signInReducers/signInReducer';
import updatePreferencesReducer from './signUpReducers/preferencesReducer';
import globalReducer from './globalReducer';

const rootReducer = combineReducers({ 
    global: globalReducer,
    data: dataReducer,
    signIn: signInReducer,
    preferences: updatePreferencesReducer
})

export default rootReducer;