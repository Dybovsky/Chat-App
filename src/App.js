import { useEffect, useState } from "react";
import TweetRoom from "./components/TweetRoom";
import Login from "./components/Login";
import { AuthContext } from './components/AuthContext';
import firebase from "firebase/app";
import { firestore } from './lib/ApiFire'

function App() {
  const [authUser, setAuthUser] = useState(null);
  const login = async (authUser) => {
    setAuthUser(authUser);
    await firestore
    .collection('users')
    .doc(authUser.uid)
    .set({userName: authUser.displayName})
  }
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if(user){
        setAuthUser(user)
      } else {
        setAuthUser(null)
      }
    });
  }, []);
 
  return (
    <AuthContext.Provider value={{
      authUser,
      login,
      logout: () => setAuthUser(null)
    }}>
      {!authUser && <Login />}
      {authUser && <TweetRoom />}
    </AuthContext.Provider>
    );
}
export default App;
