import { useState } from "react";
import TweetRoom from "./components/TweetRoom";
import Login from "./components/Login";


function App() {
  const [authUser, setAuthUser] = useState(null);
  if (!authUser) {
    return <Login />;
  }
  return (
      <TweetRoom />
    );
}
export default App;
