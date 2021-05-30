import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  textDecoration: 'none',
  color: 'white',
}


const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink
          to="/"
          style={link}
      >Home</NavLink>
      <NavLink
          to="/users/signup"
          style={link}
      >Signup</NavLink>
      <NavLink
          to="/profile"
          style={link}
      >Profile</NavLink>
      <NavLink
          to="/matches"
          style={link}
      >Matches</NavLink>
    </div>
  );
};

export default NavBar;
