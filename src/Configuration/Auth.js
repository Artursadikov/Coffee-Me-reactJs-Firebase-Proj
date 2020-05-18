import firebase from 'firebase';

let firebaseConfig = {
    apiKey: "YOUR_API-KEY",
    authDomain: "coffe-me.firebaseapp.com",
    databaseURL: "https://coffe-me.firebaseio.com",
    projectId: "coffe-me",
    storageBucket: "coffe-me.appspot.com",
    messagingSenderId: "*************",
    appId: "APP-ID",
    measurementId: "**************"
  };

  let fire =  firebase.initializeApp(firebaseConfig);

  export default fire;