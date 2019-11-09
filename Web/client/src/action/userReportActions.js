import axios from 'axios';
import {GET_USERREPORTS, ADD_USERREPORTS, DELETE_USERREPORTS, USERREPORT_LOADING} from './types';

export const getUserReports = () => dispatch => {
    dispatch(setUserReportLoading);
    axios
        .get('/api/userReport')
        .then(res=>
            dispatch({
                type: GET_USERREPORTS,
                payload: res.data
            })
        )
    return {
        type: GET_USERREPORTS
    };
}

export const deleteUserReports = (id) => {
    return {
        type: DELETE_USERREPORTS,
        payload: id
    };
}

export const addUserReports = userReport => dispatch => {
    axios
    .post('/api/userReport', userReport)
    .then(res => dispatch({
        type: ADD_USERREPORTS,
        payload: res.data
    }));
}

export const setUserReportLoading = () => {
    return {
        type: USERREPORT_LOADING
    };
}