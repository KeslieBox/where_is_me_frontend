// import Users from './Users'
// import User from './User'
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import UserForm from './UserForm'
import Users from './Users'
import User from './User'
import UserProfile from './UserProfile'
import ProfileForm from './ProfileForm'
import fetchUsers from '../actions/fetchUsers'
import { Component } from 'react'

class UsersContainer extends Component{

  componentDidMount = () => {
    this.props.fetchUsers()
  }
  
  render() {
    return (
      <>
        <p>UsersContainer</p>
          <Switch>
            <Route path={'/users/login'}>
              <UserForm />
            </Route>
            <Route path={'/users/signup'}>
              <UserForm />
            </Route>
            <Route path='/users/:id/profile/form'>
              <ProfileForm />
            </Route>
            <Route exact path="/matches">
              <Users />
            </Route>
            <Route path='/users/:id' render={(routerProps) => <User {...routerProps}/>}/>
            <Route path='/users/:id/profile' render={(routerProps) => <UserProfile {...routerProps}/>}/>
          </Switch>
      </>
    )
  }
}

export default connect(null, {fetchUsers})(UsersContainer)