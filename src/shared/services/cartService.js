import { db } from '../database/firebase';

const getCartItems = (userId) => {
    return db.collection('carts').doc(userId).collection('items').get();
};

const addToCart = (userId, productId, quantity) => {
    return db.collection('carts').doc(userId).collection('items').doc(productId).set({ quantity });
};

const removeFromCart = (userId, productId) => {
    return db.collection('carts').doc(userId).collection('items').doc(productId).delete();
};

export { getCartItems, addToCart, removeFromCart };
