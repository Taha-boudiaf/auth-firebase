import { initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBV3C7fwqpF8wAE4RnpcB7mkVqSVBqw1cg",
  authDomain: "let-s-chat-7f491.firebaseapp.com",
  projectId: "let-s-chat-7f491",
  storageBucket: "let-s-chat-7f491.appspot.com",
  messagingSenderId: "796953381031",
  appId: "1:796953381031:web:e1ee4efb8504b80b1fb382",
  measurementId: "G-JTXN95V5CE"
};

// init firebase app 

const app = initializeApp(firebaseConfig)

// init services <<firestore / auth >>

const db = getFirestore()

export const auth = getAuth(app)
export default app
