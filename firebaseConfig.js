const { initializeApp } = require('firebase/app');
const { getAuth } = require('firebase/auth');

const firebaseConfig = {
    apiKey: "AIzaSyBb_BkhcEd0wKGa11D7KJeskb9uEnEqOMo",
    authDomain: "vijay-node.firebaseapp.com",
    projectId: "vijay-node",
    storageBucket: "vijay-node.appspot.com",
    messagingSenderId: "774995358663",
    appId: "1:774995358663:web:0aec70b2eea1125d271fe2",
    measurementId: "G-VHNGKQ5GZ7"
  };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

module.exports = { auth };
