import { Component } from 'react'
import {connect, useSelector} from 'react-redux'
import {withRouter} from 'react-router-dom'
import userLogout from '../actions/user/userLogout'

// function User(props) {
    class User extends Component {

    handleLogout = () => {
        this.props.userLogout(this.props.history)
        this.props.history.push('/users')
    }

    render() {
        debugger
        return(
            <>
            <h3>Welcome, {this.props.user && this.props.user.username}</h3>
            <button onClick={this.handleLogout}>Logout</button>
            </>
        )
    }
}

const mapStateToProps = (state) => {return {users: state.users, user: state.user}}

export default connect(mapStateToProps, {userLogout}) (User)