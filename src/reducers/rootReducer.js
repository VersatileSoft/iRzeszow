import { combineReducers } from 'redux';
import dataReducer from './signUpReducers/dataReducer';
import signInReducer from './signInReducers/signInReducer';
import updatePreferences from './signUpReducers/preferencesReducer';

const rootReducer = combineReducers({ 
    data: dataReducer,
    signIn: signInReducer,
    preferences: updatePreferences,
})

export default rootReducer;