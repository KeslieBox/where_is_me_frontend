import { NavLink } from 'react-router-dom';
import {link} from '../navbar/LinkStyle'


function LoginPage(props) {
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