import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const addToCart = (productId, quantity) => {
    return axios.post(API_URL + '/cart/add', {
        productId,
        quantity
    });
};

const removeFromCart = (productId) => {
    return axios.delete(API_URL + '/cart/remove/' + productId);
};

const updateCartQuantity = (productId, quantity) => {
    return axios.put(API_URL + '/cart/update', {
        productId,
        quantity
    });
};

const clearCart = () => {
    return axios.delete(API_URL + '/cart/clear');
};

export default {
    addToCart,
    removeFromCart,
    updateCartQuantity,
    clearCart
};
