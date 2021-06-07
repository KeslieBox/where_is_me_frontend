// import Users from './Users'
// import User from './User'
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import UserForm from './UserForm'
import Prowl from './Prowl'
import User from './User'
import ProfileDisplay from './ProfileDisplay'
import ProfileForm from './ProfileForm'
import fetchUsers from '../actions/fetchUsers'
import authenticateUser from '../actions/user/authenticateUser'
import { Component } from 'react'

class UsersContainer extends Component{

  componentDidMount = () => {
    this.props.fetchUsers()
    let userID = localStorage.getItem('userID');
    if (userID) {
      this.props.authenticateUser(parseInt(userID))
    }
  }

  componentDidUpdate(prevProps) {
    let storedID = localStorage.getItem('userID');
    if (this.props.users.id && this.props.users.id !== storedID ) { //and doesn't equal current userID
      localStorage.setItem('userID', this.props.users.id);
    }
  }
  
  render() {
    return (
      <>
        <p>UsersContainer</p>
          <Switch>
            {/* <NavBar userId={this.props.user.id}/> */}
            <Route path={'/login'} component={UserForm}/>
            <Route path={'/signup'} component={UserForm}/>
            <Route exact path="/prowl" render={(routerProps) => <Prowl {...routerProps} />}/>
            <Route path='/users/:id/profile/form' component={ProfileForm}/>
            <Route path='/users/:id/profile' render={(routerProps) => <ProfileDisplay {...routerProps} userId={this.props.user.id}/>}/>
            <Route path='/users/:id' render={(routerProps) => <User {...routerProps}/>}/>
          </Switch>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {users: state.users, user: state.user}
}

export default connect(mapStateToProps, {fetchUsers, authenticateUser})(UsersContainer)