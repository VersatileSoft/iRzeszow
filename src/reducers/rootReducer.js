import { combineReducers } from 'redux';
import dataReducer from './signUpReducers/dataReducer';
import signInReducer from './signInReducers/signInReducer';
import globalReducer from './globalReducer';
import holdPostsReducer from './mainPageReducers/holdPostsReducer'

const rootReducer = combineReducers({ 
    global: globalReducer,
    data: dataReducer,
    signIn: signInReducer,
    holdPosts: holdPostsReducer
})

export default rootReducer;