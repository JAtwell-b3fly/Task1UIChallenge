import axios from 'axios';
import {
    PLACE_ORDER_REQUEST,
    PLACE_ORDER_SUCCESS,
    PLACE_ORDER_FAILURE,
    FETCH_ORDERS_REQUEST,
    FETCH_ORDERS_SUCCESS,
    FETCH_ORDERS_FAILURE
} from '../constants/actionTypes';

// action creator to place an order
export const placeOrder = (orderData) => async (dispatch) => {
    try {
        dispatch({ type: PLACE_ORDER_REQUEST });
        const { data } = await axios.post('/api/orders', orderData);
        dispatch({ type: PLACE_ORDER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: PLACE_ORDER_FAILURE,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        });
    }
};

// action creator to fetch all orders
export const fetchOrders = () => async (dispatch) => {
    try {
        dispatch({ type: FETCH_ORDERS_REQUEST });
        const { data } = await axios.get('/api/orders');
        dispatch({ type: FETCH_ORDERS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: FETCH_ORDERS_FAILURE,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        });
    }
};


