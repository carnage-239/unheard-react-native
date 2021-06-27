import {combineReducers} from 'redux';
import auth from './auth';
import song from './song';

const rootReducer = combineReducers({auth, song});

export default rootReducer;
