import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLT0wVRXm2fSXOlV8vtxIKQWXu3UTO6P4",
  authDomain: "cooking-site-dbe28.firebaseapp.com",
  projectId: "cooking-site-dbe28",
  storageBucket: "cooking-site-dbe28.appspot.com",
  messagingSenderId: "568597756426",
  appId: "1:568597756426:web:7e1356d4489221ade8fdf3",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

// exports
export { projectFirestore };
