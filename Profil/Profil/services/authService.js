const firebase = require('firebase/compat/app');
require('firebase/compat/auth');

const firebaseConfig = require('../config/firebaseConfig');

firebase.initializeApp(firebaseConfig);

function signUp(email, password) {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
}

function signIn(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

function signOut() {
  return firebase.auth().signOut();
}

module.exports = { signUp, signIn, signOut };