import { Component } from 'react'
import {connect, useSelector} from 'react-redux'
import {withRouter} from 'react-router-dom'
import userLogout from '../actions/userLogout'

// function User(props) {
    class User extends Component {
    // const users = useSelector(function(state) {return state.users})
    // const user = users.find(u => u.id === parseInt(props.match.params.id))

    handleLogout = () => {
        this.props.userLogout(this.props.history)
        this.props.history.push('/users')
    }

    render() {
        debugger
        // const user = this.props.users && this.props.users.find(u => u.id === parseInt(this.props.match.params.id))
        return(
            <>
            <h3>Welcome, {this.props.user && this.props.user.username}</h3>
            {/* <button onClick={() => this.handleLogout()}>Logout</button> */}
            <button onClick={this.handleLogout}>Logout</button>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    debugger
    return {users: state.users, user: state.user}
}

export default withRouter(connect(mapStateToProps, {userLogout}) (User))