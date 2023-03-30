import axios from 'axios';
import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    ADD_PRODUCT_REQUEST,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAILURE,
} from '../constants/actionTypes';

// Fetch all products action
export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(fetchProductsRequest());
        axios
            .get('/api/products')
            .then((response) => {
                const products = response.data;
                dispatch(fetchProductsSuccess(products));
            })
            .catch((error) => {
                dispatch(fetchProductsFailure(error.message));
            });
    };
};

export const fetchProductsRequest = () => {
    return {
        type: FETCH_PRODUCTS_REQUEST,
    };
};

export const fetchProductsSuccess = (products) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products,
    };
};

export const fetchProductsFailure = (error) => {
    return {
        type: FETCH_PRODUCTS_FAILURE,
        payload: error,
    };
};

// Add new product action
export const addProduct = (product) => {
    return (dispatch) => {
        dispatch(addProductRequest());
        axios
            .post('/api/products', product)
            .then((response) => {
                const addedProduct = response.data;
                dispatch(addProductSuccess(addedProduct));
            })
            .catch((error) => {
                dispatch(addProductFailure(error.message));
            });
    };
};

export const addProductRequest = () => {
    return {
        type: ADD_PRODUCT_REQUEST,
    };
};

export const addProductSuccess = (product) => {
    return {
        type: ADD_PRODUCT_SUCCESS,
        payload: product,
    };
};

export const addProductFailure = (error) => {
    return {
        type: ADD_PRODUCT_FAILURE,
        payload: error,
    };
};
