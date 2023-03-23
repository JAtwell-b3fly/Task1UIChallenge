import {
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_FAILURE,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
} from '../actions/authActions';

const initialState = {
    isAuthenticated: false,
    user: null,
    error: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
                error: null,
            };
        case LOGIN_USER_FAILURE:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                error: action.payload,
            };
        case LOGOUT_USER_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                error: null,
            };
        case LOGOUT_USER_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
                error: null,
            };
        case REGISTER_USER_FAILURE:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default authReducer;
