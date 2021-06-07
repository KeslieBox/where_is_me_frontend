import { NavLink, withRouter } from 'react-router-dom';
import {connect} from 'react-redux'
import showUser from './actions/userLogin'
import {useState} from 'react'

// move to index.css
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  textDecoration: 'none',
  color: 'white',
}

// const userId = () => {
//   this.showUser()

// }


const NavBar = (props) => {
  
  // need to create conditional for which links to show
  return (
    <div className='navbar'>
      <NavLink
          to="/"
          style={link}
      >Home</NavLink>
      <NavLink
          to="/signup"
          style={link}
      >Signup</NavLink>
      <NavLink
          to="/login"
          style={link}
      >Login</NavLink>
      {/* conditional, if path has id, render these links or should i make this a child component*/}
      {/* if(props.history.location.pathname === '/users/' ){
        <> */}
          <NavLink
            // need to create route for show page, /users/:id
              to={`/users/${props.userId}/profile`}
              // to='/profile'
              style={link}
          >Profile</NavLink>
          <NavLink
              to="/matches"
              style={link}
          >Matches</NavLink>
      {/* </>
      } */}
    </div>
  );
};



export default withRouter(connect(null, {showUser})(NavBar))
