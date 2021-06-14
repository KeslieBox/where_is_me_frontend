import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
import {link} from '../navbar/LinkStyle'
import userLogout from '../actions/user/userLogout'


function LoggedIn(props) {
    // const link = {
    //     width: '100px',
    //     padding: '12px',
    //     margin: '0 6px 6px',
    //     textDecoration: 'none',
    //     color: 'white',
    //   }

    return (
        <div className='navbar'>
          <NavLink
            // need to create route for show page, /users/:id
              to={`/users/${props.userId}/profile`}
              // to='/profile'
              style={link}
          >Profile</NavLink>
          <NavLink
            // need to create route for show page, /users/:id
              to={`/users/${props.userId}/preferences`}
              // to='/profile'
              style={link}
          >Preferences</NavLink>
          <NavLink
              to="/prowl"
              style={link}
          >Prowl</NavLink>
          <NavLink
              to='/matches'
              style={link}
          >Matches</NavLink>
          <NavLink
              to='/login'
            //   onClick={() => props.userLogout(props.history)}
              style={link}
          >Logout</NavLink>
    </div>
    )
}


// export default connect(null, {userLogout})(LoggedIn)
export default (LoggedIn)