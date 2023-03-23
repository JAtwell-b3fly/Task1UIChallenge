import firebase from '../config/firebase';

const db = firebase.firestore();

const fetchData = async () => {
    const data = [];
    const snapshot = await db.collection('collectionName').get();
    snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
    });
    return data;
};

export { fetchData };
