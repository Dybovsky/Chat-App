import { useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import TweetRoom from "./components/TweetRoom";
import Login from "./components/Login";

const firebaseConfig = {
  apiKey: "AIzaSyDrLAVxwPos73UKdpbBB2Z2wybqOWwf3tc",
  authDomain: "tweeter-72142.firebaseapp.com",
  projectId: "tweeter-72142",
  storageBucket: "tweeter-72142.appspot.com",
  messagingSenderId: "171227249964",
  appId: "1:171227249964:web:67f4771806b4f2cff84089",
  measurementId: "G-QY5X9MMD3D",
};
firebase.initializeApp(firebaseConfig);

function App() {
  const [authUser, setAuthUser] = useState(null);
  if (!authUser) {
    return <Login />;
  }
  return (
    <div>
      <TweetRoom />
    </div>
  );
}
export default App;
