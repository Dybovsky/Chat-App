import {Link} from "react-router-dom";
import { useContext, useState } from 'react';
import { AuthContext } from "./AuthContext";

const NavBar = (props) => {
  const [isShow, setIsShow] = useState(true)
  const authContext = useContext(AuthContext);

  function handleClick(){
    setIsShow(!isShow)
    props.onShowAllTweets(isShow)
    
  }
    return (
      <div className='nav'>
        <Link 
            className='navBtn'
            to="/"
        >
            Home
        </Link>
        <Link
          className='navBtn' 
          to="/profile"
          >
            Profile
          </Link>
          <button onClick={() => handleClick()}>{isShow ? 'Show my tweets' : 'Show all'}</button>
          <button onClick={authContext.logout}>Log Out</button>
      </div>
    );
  };

  export default NavBar;