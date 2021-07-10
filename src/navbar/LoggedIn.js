import { NavLink } from 'react-router-dom'
import {link} from '../navbar/LinkStyle'

function LoggedIn(props) {
    return (
        <div className='navbar'>
          <NavLink
              to={`/users/${props.userId}/profile`}
              // to='/profile'
              style={link}
          >Profile</NavLink>
          {/* not using yet: 
              <NavLink
              to={`/users/${props.userId}/preferences`}
              // to='/profile'
              style={link}
          >Preferences</NavLink> */}
          <NavLink
              to="/prowl"
              style={link}
          >Prowl</NavLink>
          <NavLink
              to='/matches'
              style={link}
          >Matches</NavLink>
           <NavLink
              to='/liked'
              style={link}
          >Liked</NavLink>
           <NavLink
              to='/carousel'
              style={link}
          >Carousel</NavLink>
          <NavLink
              to='/login'
              style={link}
            //   onClick={() => props.userLogout()}
          >Logout</NavLink>
    </div>
    )
}

export default (LoggedIn)