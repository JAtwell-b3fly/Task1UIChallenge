import { db } from '../firebase';

const ordersRef = db.collection('orders');

export const createOrder = async (order) => {
    const orderRef = await ordersRef.add(order);
    return orderRef.id;
};
