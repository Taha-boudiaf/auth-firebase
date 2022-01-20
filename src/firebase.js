import { initializeApp,} from "firebase/app";
import {auth } from "firebase/auth"
import {firestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBV3C7fwqpF8wAE4RnpcB7mkVqSVBqw1cg",
  authDomain: "let-s-chat-7f491.firebaseapp.com",
  projectId: "let-s-chat-7f491",
  storageBucket: "let-s-chat-7f491.appspot.com",
  messagingSenderId: "796953381031",
  appId: "1:796953381031:web:e1ee4efb8504b80b1fb382",
  measurementId: "G-JTXN95V5CE"
};


const App = initializeApp(firebaseConfig);
const db = firestore()
const auth = auth()

export {auth,db,App};