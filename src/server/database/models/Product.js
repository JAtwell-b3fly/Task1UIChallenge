import { db } from '../firebase';

const productsRef = db.collection('products');

export const getProducts = async () => {
    const productsSnapshot = await productsRef.get();
    return productsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
};
