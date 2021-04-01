import {Link} from "react-router-dom";

const NavBar = () => {
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
      </div>
    );
  };

  export default NavBar;