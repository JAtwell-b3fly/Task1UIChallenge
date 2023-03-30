import axios from 'axios';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from '../constants/actionTypes';

// Action creators for login request
export const loginRequest = () => ({
    type: LOGIN_REQUEST
});

// Action creators for login success
export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user
});

// Action creators for login failure
export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error
});

// Action creators for register request
export const registerRequest = () => ({
    type: REGISTER_REQUEST
});

// Action creators for register success
export const registerSuccess = (user) => ({
    type: REGISTER_SUCCESS,
    payload: user
});

// Action creators for register failure
export const registerFailure = (error) => ({
    type: REGISTER_FAILURE,
    payload: error
});

// Async action creator for login
export const loginUser = (email, password) => {
    return async (dispatch) => {
        try {
            dispatch(loginRequest());
            const response = await axios.post('/api/auth/login', { email, password });
            dispatch(loginSuccess(response.data));
        } catch (error) {
            dispatch(loginFailure(error.message));
        }
    };
};

// Async action creator for registration
export const registerUser = (userData) => {
    return async (dispatch) => {
        try {
            dispatch(registerRequest());
            const response = await axios.post('/api/auth/register', userData);
            dispatch(registerSuccess(response.data));
        } catch (error) {
            dispatch(registerFailure(error.message));
        }
    };
};
