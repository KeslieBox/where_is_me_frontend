import { Component } from "react";
import { connect } from "react-redux";

 
 function Matches(props) {

 
        debugger

        return(
            <>
            <ul>
                {/* need to fetch the usernames of the match ids */}
                {/* {props.user.matches.map(m => {<li>{m.username}</li>}) */}
            </ul>
            </>
        ) 
    }
 

 //  if user !== current user || seenProfiles does not already include user, seenProfiles.push(user)

//  const mapStateToProps = (state) => { return {users: state.users, user: state.user}}

//  export default connect(mapStateToProps, {addMatch})(matches)
export default Matches