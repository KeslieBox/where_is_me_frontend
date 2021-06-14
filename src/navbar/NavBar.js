// import { NavLink, withRouter } from 'react-router-dom';
import {connect} from 'react-redux'
import LoggedIn from '../login/LoggedIn'
import LoginPage from '../login/LoginPage'
import userLogout from '../actions/user/userLogout';

const NavBar = (props) => {
  {if (!props.userId || props.userId === undefined) {
    return <LoginPage />
  }else {
    return <LoggedIn userLogout={userLogout}/>
  }}
}

export default connect(null,{ userLogout})(NavBar)
