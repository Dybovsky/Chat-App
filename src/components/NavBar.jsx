import {Link} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from "./AuthContext";

const NavBar = () => {
  const authContext = useContext(AuthContext);
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
          <button onClick={authContext.logout}>Log Out</button>
      </div>
    );
  };

  export default NavBar;