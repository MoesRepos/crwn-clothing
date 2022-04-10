// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';

import { auth, signInWIthGooglePopup, signInWithGoogleRedirect ,createUserDocumentFromAuth } from '../../../utils/firebase/firebase.utils'
import SignUpForm from '../../sign-up-form/sign-up-form-component';

const SignIn = () => {
    // This code covers signing in with google redirect
    // useEffect(async () =>{    
    //     const response = await getRedirectResult(auth);
    //     console.log(response)
    //     if (response) {
    //         const userDocRef = await createUserDocumentFromAuth(response.user);
    //     }
    // }, []);
    const logGoogleUser = async () => {
        const { user } = await signInWIthGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    };


    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={ logGoogleUser }>Sign in with Google Popup</button> 
            {/* <button onClick={ signInWithGoogleRedirect }>Sign in with Google Redirect</button>  */}
            <SignUpForm />
        </div>
    );

};

export default SignIn;
