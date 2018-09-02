import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const prodConfig = {
  apiKey: "AIzaSyCNsi07jS7Zwijm_Fh0tcJzQecntiHCbPc",
  authDomain: "reactfirebase-12818.firebaseapp.com",
  databaseURL: "https://reactfirebase-12818.firebaseio.com",
  projectId: "reactfirebase-12818",
  storageBucket: "reactfirebase-12818.appspot.com",
  messagingSenderId: "669388632860"
};

const devConfig = {
  apiKey: "AIzaSyCNsi07jS7Zwijm_Fh0tcJzQecntiHCbPc",
  authDomain: "reactfirebase-12818.firebaseapp.com",
  databaseURL: "https://reactfirebase-12818.firebaseio.com",
  projectId: "reactfirebase-12818",
  storageBucket: "reactfirebase-12818.appspot.com",
  messagingSenderId: "669388632860"
};

const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export { db, auth };
