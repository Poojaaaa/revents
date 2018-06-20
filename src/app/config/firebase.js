import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBmyuV4_SwcMJrm6_BX4XO4CnvDYtNUBbo",
  authDomain: "revents-c1277.firebaseapp.com",
  databaseURL: "https://revents-c1277.firebaseio.com",
  projectId: "revents-c1277",
  storageBucket: "revents-c1277.appspot.com",
  messagingSenderId: "703665922098"
}

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
    timestampsInSnapshots: true
}
firestore.settings(settings);

export default firebase;