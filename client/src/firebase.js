import firebase from 'firebase';

let firebaseConfig = {
    apiKey: "AIzaSyBI_ri9dRckmF29Bhw7UzyYXScYk9fD14g",
    authDomain: "whatsapp-30552.firebaseapp.com",
    databaseURL: "https://whatsapp-30552-default-rtdb.firebaseio.com",
    projectId: "whatsapp-30552",
    storageBucket: "whatsapp-30552.appspot.com",
    messagingSenderId: "512942505070",
    appId: "1:512942505070:web:0dbec738a418b4ea3f3a7f"
  };

  firebase.initializeApp(firebaseConfig);

  export const storage = firebase.storage();

  export const db = firebase.firestore();