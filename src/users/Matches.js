import { Component } from "react";
import { connect } from "react-redux";
import Profile from '../matches/Profile'
import fetchUsers from '../actions/fetchUsers'

 
 class Matches extends Component {

    // handleFetch = () => {
    //     this.props.handleFetch()
    // }

    render() {
        // debugger
        // const seenProfiles = []
        // const matchTester = this.props.users && this.props.users.map(u => { 
        //     debugger
        //     if (!seenProfiles.includes(u)) {seenProfiles.push(u)} 
        // })
        return(
            <>
            <ul>
                {/* {this.props.users && this.props.users.map(u => <Profile username={u.username} />)} */}
                {/* {/* {this.props.fetchUsers()} */}
                {this.props.users && this.props.users.map(u => <li>{u.username}</li>)} 
                {/* {this.props.getUsers && this.props.getUsers.map(u => <li>{u.username}</li>)}  */}
            </ul>
            </>
        ) 
    }
 }

 //  if user !== current user || seenProfiles does not already include user, seenProfiles.push(user)

 const mapStateToProps = (state) => { 
    // debugger 
    return {users: state.users}}

 export default connect(mapStateToProps, {fetchUsers})(Matches)