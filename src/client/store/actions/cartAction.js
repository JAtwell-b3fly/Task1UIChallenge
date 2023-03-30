import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_QUANTITY, CLEAR_CART } from '../constants/actionTypes';

// Action creators for adding a product to the cart
export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product
});

// Action creators for removing a product from the cart
export const removeFromCart = (productId) => ({
    type: REMOVE_FROM_CART,
    payload: productId
});

// Action creators for updating the quantity of a product in the cart
export const updateCartQuantity = (productId, quantity) => ({
    type: UPDATE_CART_QUANTITY,
    payload: { productId, quantity }
});

// Action creators for clearing the cart
export const clearCart = () => ({
    type: CLEAR_CART
});

// Action creators for calculating the cart total
export const calculateTotal = () => ({
    type: 'CALCULATE_TOTAL',
});


