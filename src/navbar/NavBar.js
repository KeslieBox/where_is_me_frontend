import { NavLink, withRouter } from 'react-router-dom';
import {connect} from 'react-redux'
import LoggedIn from './LoggedIn'
import LoginPage from './LoginPage'
import userLogout from '../actions/user/userLogout';


// move to index.css
// export const link = {
//   width: '100px',
//   padding: '12px',
//   margin: '0 6px 6px',
//   textDecoration: 'none',
//   color: 'white',
// }

const NavBar = (props) => {
  // need to create conditional for which links to show
  {if (!props.userId || props.userId === undefined) {
  return (
    <LoginPage />
    // <div className='navbar'>
    //   <NavLink
    //       to="/"
    //       style={link}
    //   >Home</NavLink>
    //   <NavLink
    //       to="/signup"
    //       style={link}
    //   >Signup</NavLink>
    //   <NavLink
    //       to="/login"
    //       style={link}
    //   >Login</NavLink>
    // </div>
    )
      }else {
      
      {/* conditional, if path has id, render these links or should i make this a child component*/}
      {/* if(props.history.location.pathname === '/users/' ){
        <> */}
        return (
          <LoggedIn userLogout={userLogout}/>
    //       <div className='navbar'>
    //       <NavLink
    //         // need to create route for show page, /users/:id
    //           to={`/users/${props.userId}/profile`}
    //           // to='/profile'
    //           style={link}
    //       >Profile</NavLink>
    //       <NavLink
    //         // need to create route for show page, /users/:id
    //           to={`/users/${props.userId}/preferences`}
    //           // to='/profile'
    //           style={link}
    //       >Preferences</NavLink>
    //       <NavLink
    //           to="/prowl"
    //           style={link}
    //       >Prowl</NavLink>
    //       <NavLink
    //           to='/matches'
    //           style={link}
    //       >Matches</NavLink>
    //       <NavLink
    //           to='/users'
    //           onClick={() => userLogout(props.history)}
    //           style={link}
    //       >Logout</NavLink>
    // </div>
  )
}}
}

export default withRouter(connect(null,{ userLogout})(NavBar))
