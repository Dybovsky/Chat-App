import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import { useLayoutEffect } from 'react';
import 'firebaseui/dist/firebaseui.css'; 
const Login = () => {
    useLayoutEffect(() => {

        const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth())
        ui.start('#firebaseui-auth-container', {
            signInOptions: [
              // List of OAuth providers supported.
              firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            ],
            // Other config options...
            signInFlow: 'popup',
            callbacks: {
                signInSuccessWithAuthResult: (authResult) => {
                    const { displayName, uid} = authResult;
                    const authUser = {
                        uid,
                        displayName,
                    }
                    return false
                 }
            }
          });
    },[])
    return(
        <div id='firebaseui-auth-container'>

        </div>
    )
}

export default Login