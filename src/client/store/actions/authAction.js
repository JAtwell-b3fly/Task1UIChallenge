import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR } from '../constants/actionTypes';
import authService from '../../../shared/services/authService';

// Load user
export const loadUser = () => async dispatch => {
    try {
        const res = await authService.getCurrentUser();
        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        });
    }
};

// Register user
export const register = ({ name, surname, email, password }) => async dispatch => {
    const newUser = { name, surname, email, password };
    try {
        const res = await authService.registerUser(newUser);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
        dispatch(loadUser());
    } catch (err) {
        dispatch({
            type: REGISTER_FAIL,
            payload: err.response.data.msg
        });
    }
};

// Login user
export const login = ({ email, password }) => async dispatch => {
    const user = { email, password };
    try {
        const res = await authService.loginUser(user);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
        dispatch(loadUser());
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL,
            payload: err.response.data.msg
        });
    }
};

// Logout user
export const logout = () => async dispatch => {
    try {
        await authService.logoutUser();
        dispatch({
            type: LOGOUT_SUCCESS
        });
    } catch (err) {
        console.error(err);
    }
};
