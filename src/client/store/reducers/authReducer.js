import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL } from '../constants/actionTypes';

const initialState = {
    isAuthenticated: false,
    user: null,
    error: null
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
                error: null
            };
        case LOGIN_FAIL:
        case REGISTER_FAIL:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                error: action.payload
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                error: null
            };
        default:
            return state;
    }
}

