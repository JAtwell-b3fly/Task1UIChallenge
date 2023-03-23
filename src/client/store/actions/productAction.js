import { db } from '../services/firebase';

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const ADD_PRODUCT_REQUEST = 'ADD_PRODUCT_REQUEST';
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const ADD_PRODUCT_FAILURE = 'ADD_PRODUCT_FAILURE';
export const UPDATE_PRODUCT_REQUEST = 'UPDATE_PRODUCT_REQUEST';
export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';
export const UPDATE_PRODUCT_FAILURE = 'UPDATE_PRODUCT_FAILURE';
export const DELETE_PRODUCT_REQUEST = 'DELETE_PRODUCT_REQUEST';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_FAILURE = 'DELETE_PRODUCT_FAILURE';
export const SELECT_PRODUCT = 'SELECT_PRODUCT';

export const fetchProducts = () => async (dispatch) => {
    dispatch({ type: FETCH_PRODUCTS_REQUEST });
    try {
        const products = [];
        const querySnapshot = await db.collection('products').get();
        querySnapshot.forEach((doc) => {
            products.push({ id: doc.id, ...doc.data() });
        });
        dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
        dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error.message });
    }
};

export const addProduct = (product) => async (dispatch) => {
    dispatch({ type: ADD_PRODUCT_REQUEST });
    try {
        const docRef = await db.collection('products').add(product);
        dispatch({ type: ADD_PRODUCT_SUCCESS, payload: { id: docRef.id, ...product } });
    } catch (error) {
        dispatch({ type: ADD_PRODUCT_FAILURE, payload: error.message });
    }
};

export const updateProduct = (id, updates) => async (dispatch) => {
    dispatch({ type: UPDATE_PRODUCT_REQUEST });
    try {
        await db.collection('products').doc(id).update(updates);
        dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: { id, updates } });
    } catch (error) {
        dispatch({ type: UPDATE_PRODUCT_FAILURE, payload: error.message });
    }
};

export const deleteProduct = (id) => async (dispatch) => {
    dispatch({ type: DELETE_PRODUCT_REQUEST });
    try {
        await db.collection('products').doc(id).delete();
        dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: id });
    } catch (error) {
        dispatch({ type: DELETE_PRODUCT_FAILURE, payload: error.message });
    }
};

export const selectProduct = (product) => ({
    type: SELECT_PRODUCT,
    payload: product,
});
