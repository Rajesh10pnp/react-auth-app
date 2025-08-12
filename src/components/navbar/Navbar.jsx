 
import './Navbar.css';  
import { Link } from 'react-router-dom';
import {useAuth} from "../../context/AuthContext";

const Navbar = () => { 

   const {user, logout } = useAuth();


  return (
  <header className='nav'>
    <div className='nav-left'>
    <Link to="/" className='brand'>My Portal</Link></div>
    <div className='nav-right'>
      <nav>
      {/* <Link to="/home">Home</Link> */}
      {!user&& <Link to="/login">login</Link>}
      {!user&& <Link to="/signup">Signup</Link>}
      {/* {!user&& <Link to="/home">Profile</Link>} */}
      {user?.role==="admin" && <Link to="admin">Admin </Link>}
      {user?.role==="employee" && <Link to="employee">Employee </Link>}
      {user ? (<button onClick={logout} className='nav-logout'>Logout</button>) : null}
      </nav>
    </div>
  </header>
  );
};

export default Navbar;