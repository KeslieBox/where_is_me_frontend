import { NavLink } from 'react-router-dom';
import {link} from './LinkStyle'


function LoginPage(props) {
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
    </div>
    )
}


export default LoginPage