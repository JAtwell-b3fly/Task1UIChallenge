import { auth } from '../../server/database/firebase';

const signUp = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
};

const signIn = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
};

const signOut = () => {
    return auth.signOut();
};

export { signUp, signIn, signOut };
