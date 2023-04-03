import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_QUANTITY, CLEAR_CART } from "../constants/actionTypes";
import {addToCart, removeFromCart, updateCartQuantity, clearCart } from "../../../shared/services/cartService";

export const addToCart = (product, quantity) => async (dispatch) => {
    try {
        const result = await addToCartService(product, quantity);
        dispatch({
            type: ADD_TO_CART,
            payload: result.data.cart,
        });
    } catch (error) {
        console.log(error);
    }
};

export const removeFromCart = (cartId) => async (dispatch) => {
    try {
        const result = await removeFromCartService(cartId);
        dispatch({
            type: REMOVE_FROM_CART,
            payload: result.data.cart,
        });
    } catch (error) {
        console.log(error);
    }
};

export const updateCartQuantity = (cartId, quantity) => async (dispatch) => {
    try {
        const result = await updateCartQuantityService(cartId, quantity);
        dispatch({
            type: UPDATE_CART_QUANTITY,
            payload: result.data.cart,
        });
    } catch (error) {
        console.log(error);
    }
};

export const clearCart = () => async (dispatch) => {
    try {
        const result = await clearCartService();
        dispatch({
            type: CLEAR_CART,
            payload: result.data.cart,
        });
    } catch (error) {
        console.log(error);
    }
};
