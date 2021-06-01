// import Users from './Users'
// import User from './User'
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import NavBar from '../NavBar'
import UserForm from './UserForm'
import Users from './Users'
import User from './User'
import UserProfile from './UserProfile'
import ProfileForm from './ProfileForm'
import fetchUsers from '../actions/fetchUsers'
import authenticateUser from '../actions/authenticateUser'
import { Component } from 'react'

class UsersContainer extends Component{

  componentDidMount = () => {
    this.props.fetchUsers()
    debugger
    let userID = localStorage.getItem('userID');
    if (userID) {
      debugger
      this.props.authenticateUser(userID)
    }
  }

  componentDidUpdate(prevProps) {
    debugger
    let storedID = localStorage.getItem('userID');
    if (this.props.user.id && this.props.user.id !== storedID ) { //and doesn't equal current userID
      localStorage.setItem('userID', this.props.user.id);
    }
  }
  
  render() {
    return (
      <>
        <p>UsersContainer</p>
          <Switch>
            {/* <NavBar userId={this.props.user.id}/> */}
            <Route path={'/users/login'} component={UserForm}/>
            <Route path={'/users/signup'} component={UserForm}/>
            <Route path='/users/:id/profile/form' component={ProfileForm}/>
            <Route exact path="/matches" component={Users}/>
            <Route path='/users/:id' render={(routerProps) => <User {...routerProps}/>}/>
            <Route path='/users/:id/profile' render={(routerProps) => <UserProfile {...routerProps}/>}/>
          </Switch>
      </>
    )
  }
}

const mapStateToProps = state => ({user: state.user})

export default connect(mapStateToProps, {fetchUsers, authenticateUser})(UsersContainer)