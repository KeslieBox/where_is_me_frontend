import { Component } from "react";
import {connect} from 'react-redux'

class Profile extends Component {
    
    render() {
        debugger
        return (
            <h3>{this.props.username}</h3>
        )
    }
}



const mapStateToProps = (state) => { return {users: state.users}}

export default connect(mapStateToProps)(Profile)