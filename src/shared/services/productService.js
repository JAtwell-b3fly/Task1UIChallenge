import { db } from '../../server/database/firebase';

const getProducts = () => {
    return db.collection('products').get();
};

const getProductById = (id) => {
    return db.collection('products').doc(id).get();
};

export { getProducts, getProductById };
