import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA1SSB-r0IlkSm9Zk5gZ2TB5nSSSQMg_vc',
  authDomain: 'estore-db-82cf8.firebaseapp.com',
  databaseURL: 'https://estore-db-82cf8.firebaseio.com',
  projectId: 'estore-db-82cf8',
  storageBucket: '',
  messagingSenderId: '1010157901184',
  appId: '1:1010157901184:web:fe9e8bed147905dd30dd65'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
