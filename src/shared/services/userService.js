import { db } from '../../server/database/firebase';

const getUserById = (id) => {
    return db.collection('users').doc(id).get();
};

export { getUserById };
