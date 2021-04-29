import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCZ5It0QJRCWmtzr56A03H5Z773gLmsOZo",
  authDomain: "plan-be919.firebaseapp.com",
  projectId: "plan-be919",
  storageBucket: "plan-be919.appspot.com",
  messagingSenderId: "8222138770",
  appId: "1:8222138770:web:156a25cbc8c457775a614b",
  measurementId: "G-WSHVD33P0T",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
