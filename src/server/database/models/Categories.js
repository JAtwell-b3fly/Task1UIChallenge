import { db } from '../firebase';

const categoriesRef = db.collection('categories');

export const getCategories = async () => {
    const categoriesSnapshot = await categoriesRef.get();
    return categoriesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
};
