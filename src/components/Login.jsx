import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import { useLayoutEffect } from 'react';
import 'firebaseui/dist/firebaseui.css';

const Login = () => {
    useLayoutEffect(() => {

        const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth())
        ui.start('#firebaseui-auth-container', {
            signInOptions: [
              firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            ],
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
        <div id='firebaseui-auth-container'></div>
    )
}

export default Login