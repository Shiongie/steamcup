import {GET_USERREPORTS, ADD_USERREPORTS, DELETE_USERREPORTS, USERREPORT_LOADING} from '../action/types';
const initialState = {
    userReports: [],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_USERREPORTS:
            return {
                ...state,
                userReports: action.payload,
                loading:false
            }
        case DELETE_USERREPORTS:
            return {
                ...state,
                userReports: state.userReports.filter(userReport => userReport.id != action.payload)
            }
        case ADD_USERREPORTS:
            return {
                ...state,
                userReports: [action.payload, ...state.userReports]
            }
        case USERREPORT_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}