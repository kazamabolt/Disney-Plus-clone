import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAcdvyDr62giLeDju1a_zpwBjihdXZDXTY",
    authDomain: "disneyplus-clone-60835.firebaseapp.com",
    projectId: "disneyplus-clone-60835",
    storageBucket: "disneyplus-clone-60835.appspot.com",
    messagingSenderId: "618217012099",
    appId: "1:618217012099:web:f930a3aedeb6522ca254b6",
    measurementId: "G-FP6WB28W1N"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;