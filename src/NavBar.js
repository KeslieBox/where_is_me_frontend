import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux'
import showUser from './actions/showUser'

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  textDecoration: 'none',
  color: 'white',
}

// const userId = () => {
//   debugger

// }


const NavBar = () => {
  // need to create conditional for which links to show
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
          to="/users/login"
          style={link}
      >Login</NavLink>
      <NavLink
        // need to create route for show page, /users/:id
          // to={`/users/${userId()}`}
          to='/profile'
          style={link}
      >Profile</NavLink>
      <NavLink
          to="/matches"
          style={link}
      >Matches</NavLink>
    </div>
  );
};


export default connect(null, {showUser})(NavBar)
