import {combineReducers} from 'redux';
import userReportReducer from './userReportReducer.js'
import errorReducer from './errorReducer.js'
import authReducer from './authReducer.js'

export default combineReducers({
    userReport: userReportReducer,
    error: errorReducer,
    auth: authReducer
});