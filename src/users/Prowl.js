import { Component } from "react";
import { connect } from "react-redux";
import Profile from '../matches/Profile'
// import fetchUsers from '../actions/fetchUsers'

 
 class Prowl extends Component {

    handleClick = (e) => {
        e.preventDefault()
        debugger
        this.props.addMatch(e.target.id)
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
                {/* {this.props.users && this.props.users.map(u => <><li>{u.username}</li> <button id={u.id} onClick={(e) => this.handleClick(e)}>Like</button></>)} */}
                {this.props.users && this.props.users.map(u => {
                    debugger
                    if (u.id !== this.props.user.id) {
                        <><li>{u.username}</li> 
                        <button id={u.id} onClick={(e) => this.handleClick(e)}>Like</button></>
                    }
                })} 
            </ul>
            </>
        ) 
    }
 }

 //  if user !== current user || seenProfiles does not already include user, seenProfiles.push(user)

 const mapStateToProps = (state) => { return {users: state.users, user: state.user, matches: state.matches }}

 export default connect(mapStateToProps)(Prowl)