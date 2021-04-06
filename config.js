import firebase from 'firebase';
require('@firebase/firestore')

  var firebaseConfig = {
    apiKey: "AIzaSyAKg00HE334_Cdr3UH9RPBzua6VlhwafvM",
    authDomain: "barter-system-41ce1.firebaseapp.com",
    projectId: "barter-system-41ce1",
    storageBucket: "barter-system-41ce1.appspot.com",
    messagingSenderId: "1046678563012",
    appId: "1:1046678563012:web:d1d00a2fbee6ffae534191"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();