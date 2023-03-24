import { db } from '../../server/database/firebase';

const getCategories = () => {
    return db.collection('categories').get();
};

export { getCategories };
