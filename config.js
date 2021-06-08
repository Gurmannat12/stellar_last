import firebase from 'firebase'
require('@firebase/firestore')

  var firebaseConfig = {
    apiKey: "AIzaSyAGBj69CadAOiZImqWSybFZnNmpORb6Ysc",
    authDomain: "story-hub-e104a.firebaseapp.com",
    databaseURL: "https://story-hub-e104a-default-rtdb.firebaseio.com",
    projectId: "story-hub-e104a",
    storageBucket: "story-hub-e104a.appspot.com",
    messagingSenderId: "351590787213",
    appId: "1:351590787213:web:1155683eb1628fbf401ac4"
  };
  
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();
