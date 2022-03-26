import {initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBm-uReHsg-kmvsK0lCir76_oQ66hufLvU",
    authDomain: "crwn-clothing-db-6984f.firebaseapp.com",
    projectId: "crwn-clothing-db-6984f",
    storageBucket: "crwn-clothing-db-6984f.appspot.com",
    messagingSenderId: "595641725829",
    appId: "1:595641725829:web:7c3451d23f67551d284aec"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
      prompt: "select_account"
  })

export const auth = getAuth();
export const signInWIthGooglePopup = () => signInWIthGooglePopup(auth, provider);