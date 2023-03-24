import { db } from '../../server/database/firebase';

const getWishlistItems = (userId) => {
    return db.collection('wishlists').doc(userId).collection('items').get();
};

const addToWishlist = (userId, productId) => {
    return db.collection('wishlists').doc(userId).collection('items').doc(productId).set({});
};

const removeFromWishlist = (userId, productId) => {
    return db.collection('wishlists').doc(userId).collection('items').doc(productId).delete();
};

export { getWishlistItems, addToWishlist, removeFromWishlist };
