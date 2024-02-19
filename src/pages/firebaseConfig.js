import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/database'

const firebaseConfig = {
  apiKey: "AIzaSyCW5o1WXJQoPRnInX0ZvOc7Odb9RbCSQME",
  authDomain: "react-firebase-auth-7ee0e.firebaseapp.com",
  projectId: "react-firebase-auth-7ee0e",
  storageBucket: "react-firebase-auth-7ee0e.appspot.com",
  messagingSenderId: "622752631148",
  appId: "1:622752631148:web:d0f35a55a2f21a11bacb49"
};

const app = firebase.initializeApp(firebaseConfig);
export default app