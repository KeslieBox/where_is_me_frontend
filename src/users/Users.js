import { Component } from "react";
import { connect } from "react-redux";

 
 class Users extends Component {
    render() {
        return(
            <ul>
                {this.props.users && this.props.users.map(u => <li>{u.username}</li>)}
            </ul>
        )
    }
 }

 const mapStateToProps = (state) => { return {users: state.users}}


 export default connect(mapStateToProps)(Users)