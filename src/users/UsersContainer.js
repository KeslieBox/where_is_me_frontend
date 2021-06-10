// import Users from './Users'
// import User from './User'
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import Home from './Home'
import UserForm from './UserForm'
import Prowl from './Prowl'
import Matches from './Matches'
import User from './User'
import PreferencesDisplay from './PreferencesDisplay'
import PreferencesForm from './PreferencesForm'
import ProfileDisplay from './ProfileDisplay'
import ProfileForm from './ProfileForm'
import fetchUsers from '../actions/fetchUsers'
import authenticateUser from '../actions/user/authenticateUser'
import { Component } from 'react'

class UsersContainer extends Component{

  componentDidMount = async() => {
    // fetching all users asychronously right now in order to control the order of fetch requests for users/user 
    // in order to remove the current user after all the users have been fetched
    // should come up with a better solution later if the app were to grow
    await this.props.fetchUsers()
    let userID = localStorage.getItem('userID');
    if (userID) {
     this.props.authenticateUser(parseInt(userID))
    }
  }

  componentDidUpdate(prevProps) {
    let storedID = localStorage.getItem('userID');
    if (this.props.user.id && this.props.user.id !== storedID ) { //and doesn't equal current userID
      localStorage.setItem('userID', this.props.user.id);
    }
    // alternative to async fetchusers
    // if (prevProps.users.length === 0 && this.props.users.length !== 0 && this.props.user.id){
    //   // need to call dispatch
    // }
  }
  
  render() {
    return (
      <>
          <Switch>
            <Route path={'/login'} render={(routerProps) => <UserForm {...routerProps}/>}/>
            <Route path={'/signup'} render={(routerProps) => <UserForm {...routerProps}/>}/>
            <Route exact path="/prowl" render={(routerProps) => <Prowl {...routerProps} />}/>
            <Route exact path="/matches" render={(routerProps) => <Matches {...routerProps} />}/>
            <Route path='/users/:id/preferences/form' component={PreferencesForm}/>
            <Route path='/users/:id/preferences' render={(routerProps) => <PreferencesDisplay {...routerProps}/>}/>
            <Route path='/users/:id/profile/form' component={ProfileForm}/>
            <Route path='/users/:id/profile' render={(routerProps) => <ProfileDisplay {...routerProps}/>}/>
            <Route path='/users/:id' render={(routerProps) => <User {...routerProps}/>}/>
            <Route path={'/'} component={Home}></Route>
          </Switch>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {users: state.users, user: state.user}
}

export default connect(mapStateToProps, {fetchUsers, authenticateUser})(UsersContainer)