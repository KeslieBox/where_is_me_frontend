import { Component } from "react";
import { connect } from "react-redux";
import {Route, Switch} from 'react-router-dom'
import Profile from '../matches/Profile'
import Matches from './Matches'
import addMatch from '../actions/user/addMatch'
// import fetchUsers from '../actions/fetchUsers'

 
 class Prowl extends Component {

    handleClick = (e) => {
        e.preventDefault()
        debugger
        this.props.addMatch(this.props.user.id, parseInt(e.target.id))
    }

    render() {
        debugger
        // const seenProfiles = []
        // const matchTester = this.props.users && this.props.users.map(u => { 
        //     debugger
        //     if (!seenProfiles.includes(u)) {seenProfiles.push(u)} 
        // })
        return(
            <>
            <ul>
                {this.props.users && this.props.users.map(u => <><li>{u.username}</li> <button id={u.id} onClick={(e) => this.handleClick(e)}>Like</button></>)}
                {/* to figure out how not to show the current user profile */}
                {/* {this.props.users && this.props.users.map(u => {
                    debugger
                    if (u.id !== this.props.user.id) {
                        <><li>{u.username}</li> 
                        <button id={u.id} onClick={(e) => this.handleClick(e)}>Like</button></>
                    }
                })}  */}
            </ul>
            {/* <Route exact path={`/users/${this.props.user.id}`} render={(routerProps) => <Matches {...routerProps} />}/> */}

            </>
        ) 
    }
 }

 //  if user !== current user || seenProfiles does not already include user, seenProfiles.push(user)

 const mapStateToProps = (state) => { return {users: state.users, user: state.user, matches: state.matches }}

 export default connect(mapStateToProps, {addMatch})(Prowl)