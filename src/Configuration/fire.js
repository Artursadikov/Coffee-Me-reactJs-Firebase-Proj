import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBsAFDdyVbyfamqkMMZDOZN9CYNOVeKeeo",
    authDomain: "coffe-me.firebaseapp.com",
    databaseURL: "https://coffe-me.firebaseio.com",
    projectId: "coffe-me",
    storageBucket: "coffe-me.appspot.com",
    messagingSenderId: "1048920473475",
    appId: "1:1048920473475:web:539acc9e0945b2f70480b6",
    measurementId: "G-1NTV9KLXSW"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;