import { auth } from '../../services/firebase';

// Action types
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';
export const LOGOUT_USER_FAILURE = 'LOGOUT_USER_FAILURE';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';

// Action creators
export const loginUserSuccess = (user) => ({
    type: LOGIN_USER_SUCCESS,
    payload: user,
});

export const loginUserFailure = (error) => ({
    type: LOGIN_USER_FAILURE,
    payload: error,
});

export const logoutUserSuccess = () => ({
    type: LOGOUT_USER_SUCCESS,
});

export const logoutUserFailure = (error) => ({
    type: LOGOUT_USER_FAILURE,
    payload: error,
});

export const registerUserSuccess = (user) => ({
    type: REGISTER_USER_SUCCESS,
    payload: user,
});

export const registerUserFailure = (error) => ({
    type: REGISTER_USER_FAILURE,
    payload: error,
});

export const loginUser = (email, password) => async (dispatch) => {
    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        const user = userCredential.user;
        dispatch(loginUserSuccess(user));
    } catch (error) {
        dispatch(loginUserFailure(error.message));
    }
};

export const logoutUser = () => async (dispatch) => {
    try {
        await auth.signOut();
        dispatch(logoutUserSuccess());
    } catch (error) {
        dispatch(logoutUserFailure(error.message));
    }
};

export const registerUser = (email, password) => async (dispatch) => {
    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;
        dispatch(registerUserSuccess(user));
    } catch (error) {
        dispatch(registerUserFailure(error.message));
    }
};
