import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import Home from './users/Home'
import UserForm from './login/UserForm'
import Prowl from './matches/Prowl'
import Matches from './matches/Matches'
import User from './users/User'
import PreferencesDisplay from './matches/PreferencesDisplay'
import PreferencesForm from './matches/PreferencesForm'
import ProfileDisplay from './users/ProfileDisplay'
import ProfileForm from './users/ProfileForm'
import fetchUsers from './actions/fetchUsers'
import authenticateUser from './actions/user/authenticateUser'
import { Component } from 'react'

class UsersContainer extends Component{

  componentDidMount = async() => {
    // fetching all users asychronously in order to control the order of fetch requests for users before user 
    // in order to remove the current user after all the users have been fetched
    // should come up with a better solution later if the app were to grow
    debugger
    await this.props.fetchUsers()
    let userID = localStorage.getItem('userID')
    if (userID && userID !== undefined){
      this.props.authenticateUser(parseInt(userID))
    } 
  }

  componentDidUpdate = async(prevProps) => {
    let storedID = localStorage.getItem('userID')
    debugger
    if (this.props.user.id && this.props.user.id !== storedID || this.props.user.id !== parseInt(storedID) ) { 
      localStorage.setItem('userID', this.props.user.id)
    }
    // alternative to async fetchusers to work on
    // if (prevProps.users.length === 0 && this.props.users.length !== 0 && this.props.user.id){
    // //   // need to call dispatch
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

const mapStateToProps = (state) => { return {users: state.users, user: state.user}}

export default connect(mapStateToProps, {fetchUsers, authenticateUser})(UsersContainer)