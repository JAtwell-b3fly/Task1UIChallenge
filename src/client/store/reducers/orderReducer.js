import * as ActionTypes from '../constants/actionTypes';

const initialState = {
    isLoading: false,
    orders: [],
    errMess: null
};

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.PLACE_ORDER_REQUEST:
            return {
                ...state,
                isLoading: true,
                errMess: null
            };
        case ActionTypes.PLACE_ORDER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                errMess: null,
                orders: state.orders.concat(action.payload)
            };
        case ActionTypes.PLACE_ORDER_FAILURE:
            return {
                ...state,
                isLoading: false,
                errMess: action.payload
            };
        case ActionTypes.FETCH_ORDERS_REQUEST:
            return {
                ...state,
                isLoading: true,
                errMess: null
            };
        case ActionTypes.FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                errMess: null,
                orders: action.payload
            };
        case ActionTypes.FETCH_ORDERS_FAILURE:
            return {
                ...state,
                isLoading: false,
                errMess: action.payload
            };
        default:
            return state;
    }
};
