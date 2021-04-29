import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAlbmD6BlSTEjwuFNKFG6RakY92yh9RymY",
    authDomain: "c-77-4d388.firebaseapp.com",
    databaseURL: "https://c-77-4d388.firebaseio.com",
    projectId: "c-77-4d388",
    storageBucket: "c-77-4d388.appspot.com",
    messagingSenderId: "345105578770",
    appId: "1:345105578770:web:f6bf26a6222f3bf85151cb",
    measurementId: "G-CCE7J94PPK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();