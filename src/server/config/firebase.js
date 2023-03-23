import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {

  apiKey: "AIzaSyB8j4kssGwk499iDtctbenuk-FcvtGgU2o",
  authDomain: "chemi-clean-app-backend.firebaseapp.com",
  databaseURL: "https://chemi-clean-app-backend-default-rtdb.firebaseio.com",
  projectId: "chemi-clean-app-backend",
  storageBucket: "chemi-clean-app-backend.appspot.com",
  messagingSenderId: "1054596389344",
  appId: "1:1054596389344:web:e08408b647d513d8887385",
  measurementId: "G-8YJMDZXX98"
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };