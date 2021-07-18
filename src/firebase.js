import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCXNPnEhP6pUk-q45xgS-N1d_NwrwXu_og",
    authDomain: "whatsapp-clone-85de8.firebaseapp.com",
    projectId: "whatsapp-clone-85de8",
    storageBucket: "whatsapp-clone-85de8.appspot.com",
    messagingSenderId: "209318974614",
    appId: "1:209318974614:web:f117f52d476ef79f515eb7",
    measurementId: "G-NWZCEDMJW4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export {auth,provider};
export default db;