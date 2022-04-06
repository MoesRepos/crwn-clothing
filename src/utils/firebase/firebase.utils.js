import {initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBbZZBOJZ9fyLwmyMGWTx0eOpZHBon7rrI",
  authDomain: "crwn-clothing-db-13788.firebaseapp.com",
  projectId: "crwn-clothing-db-13788",
  storageBucket: "crwn-clothing-db-13788.appspot.com",
  messagingSenderId: "475566342234",
  appId: "1:475566342234:web:df4dd54d6d5fb000359863"
};
  
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
      prompt: "select_account"
  });

export const auth = getAuth();
export const signInWIthGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid )

  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists()){
    const { displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {displayName, email, createdAt});
     }catch(error){
       console.log('error creating the user', error.message);
     } 
  }
  return userDocRef;
};
