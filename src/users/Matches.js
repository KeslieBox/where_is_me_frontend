import { Component } from "react";
import { connect } from "react-redux";

 
 class Matches extends Component {

     render () {
        debugger
        return(
            <>
            <ul>
                {/* need to fetch the usernames of the match ids and need to check if the user has this user in their matches*/}
                {this.props.users.map(u => {
                    debugger
                    if (this.props.user.likedMatches && this.props.user.likedMatches.includes(u.id)){
                        <li>{u.username}</li>
                    }
                })}
            </ul>
            </>
        ) 
    }
 }

 //  if user !== current user || seenProfiles does not already include user, seenProfiles.push(user)

 const mapStateToProps = (state) => { return {users: state.users, user: state.user}}

 export default connect(mapStateToProps)(Matches)
