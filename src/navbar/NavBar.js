import {connect} from 'react-redux'
import LoggedIn from './LoggedIn'
import LoginPage from './LoginPage'
import userLogout from '../actions/user/userLogout';

const NavBar = (props) => {
  debugger
  {if (!props.userId || props.userId === undefined) {
    return <LoginPage />
  }else {
    return <LoggedIn userId={props.userId} userLogout={userLogout}/>
  }}
}

export default connect(null,{ userLogout})(NavBar)
