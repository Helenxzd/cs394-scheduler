import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB1_gPTc2VHc6mlaPLjsH-12lz7tedlB3s",
  authDomain: "cs394-scheduler.firebaseapp.com",
  databaseURL: "https://cs394-scheduler.firebaseio.com",
  projectId: "cs394-scheduler",
  storageBucket: "cs394-scheduler.appspot.com",
  messagingSenderId: "214721976617",
  appId: "1:214721976617:web:645e6c22b8d42a6e117f38",
};

firebase.initializeApp(firebaseConfig);

export default firebase;