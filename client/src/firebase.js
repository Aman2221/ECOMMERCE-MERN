import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAzSZT3IUKPVyRKykN1x0MVkYeJ9qA185Q",
    authDomain: "login-react-51687.firebaseapp.com",
    databaseURL: "https://login-react-51687-default-rtdb.firebaseio.com",
    projectId: "login-react-51687",
    storageBucket: "login-react-51687.appspot.com",
    messagingSenderId: "919852946973",
    appId: "1:919852946973:web:bf52029cc132acf7b498f4",
    measurementId: "G-5DF0F6NS9C"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();