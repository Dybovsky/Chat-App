import { useEffect, useState } from "react";
import TweetRoom from "./components/TweetRoom";
import Login from "./components/Login";
import { AuthContext } from './components/AuthContext';
import firebase from "firebase/app";


function App() {
  const [authUser, setAuthUser] = useState(null);
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
      login: (authUser) => setAuthUser(authUser),
      logout: () => setAuthUser(null)
    }}>
      {!authUser && <Login />}
      {authUser && <TweetRoom />}
    </AuthContext.Provider>
    );
}
export default App;
