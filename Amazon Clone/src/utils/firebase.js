import firebase from "firebase"
var firebaseConfig = {
    apiKey: "AIzaSyDZwg4a4Nzu9AyscJxLlUSAzu2L9QRSVjE",
    authDomain: "clone-142cc.firebaseapp.com",
    projectId: "clone-142cc",
    storageBucket: "clone-142cc.appspot.com",
    messagingSenderId: "425277088741",
    appId: "1:425277088741:web:e611fe443320c76153450c"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth();
  export default (db, auth);