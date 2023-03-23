import api from '../../services/api';

// Action Types
export const CREATE_ORDER_REQUEST = 'CREATE_ORDER_REQUEST';
export const CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS';
export const CREATE_ORDER_FAILURE = 'CREATE_ORDER_FAILURE';

export const FETCH_ORDERS_REQUEST = 'FETCH_ORDERS_REQUEST';
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const FETCH_ORDERS_FAILURE = 'FETCH_ORDERS_FAILURE';

// Action Creators
export const createOrder = (orderData) => async (dispatch) => {
    dispatch({ type: CREATE_ORDER_REQUEST });
    try {
        const response = await api.post('/orders', orderData);
        dispatch({ type: CREATE_ORDER_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: CREATE_ORDER_FAILURE, payload: error.message });
    }
};

export const fetchOrders = () => async (dispatch) => {
    dispatch({ type: FETCH_ORDERS_REQUEST });
    try {
        const response = await api.get('/orders');
        dispatch({ type: FETCH_ORDERS_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: FETCH_ORDERS_FAILURE, payload: error.message });
    }
};
