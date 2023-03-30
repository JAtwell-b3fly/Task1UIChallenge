import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
} from '../constants/actionTypes';

const initialState = {
    user: null,
    error: null,
    loading: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
        case REGISTER_REQUEST:
            return {
                ...state,
                error: null,
                loading: true,
            };
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                error: null,
                loading: false,
            };
        case LOGIN_FAILURE:
        case REGISTER_FAILURE:
            return {
                ...state,
                user: null,
                error: action.payload,
                loading: false,
            };
        case LOGOUT:
            return {
                ...state,
                user: null,
                error: null,
                loading: false,
            };
        default:
            return state;
    }
};

export default authReducer;
