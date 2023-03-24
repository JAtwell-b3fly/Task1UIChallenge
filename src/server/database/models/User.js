import { auth } from '../firebase';

export const login = async (email, password) => {
    try {
        const userCredential = await auth.signInWithEmailAndPassword(
            email,
            password
        );
        return userCredential.user;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const logout = async () => {
    try {
        await auth.signOut();
    } catch (error) {
        throw new Error(error.message);
    }
};

export const getUser = () => {
    return auth.currentUser;
};
