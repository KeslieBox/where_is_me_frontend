import { Component } from 'react'
import {connect} from 'react-redux'

// function User(props) {
class User extends Component {

    componentDidMount(){

    }

    render () {
        return(
            <>
            {this.props.user.id ? <h1>Welcome, {this.props.user && this.props.user.username}</h1> : ''}
            </>
        )
    }    
}

const mapStateToProps = (state) => {return {users: state.users, user: state.user}}

export default connect(mapStateToProps)(User)