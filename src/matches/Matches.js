import { Component } from "react";
import { connect } from "react-redux";
 
function Matches (props) {     
    return(
        <ul>                
            {props.user.mutualMatches && props.user.mutualMatches.map(u => {
                debugger
                return <li key={u.id}>{u.username} </li> 
            })}
        </ul>
    ) 
}

const mapStateToProps = (state) => { return {users: state.users, user: state.user}}

export default connect(mapStateToProps)(Matches)
