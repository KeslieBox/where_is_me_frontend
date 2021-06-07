import React, {Component} from 'react'
import {connect} from 'react-redux'
import userSignup from '../actions/user/userSignup'
import userLogin from '../actions/user/userLogin'
import userLogout from '../actions/user/userLogout'
import UserFormComponent from './UserFormComponent'

class UserForm extends Component{

    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }

    componentDidMount(){
        // do i want to handle logout here?
        if (this.props.user && this.props.user.id){
            localStorage.setItem('userID', '')
            this.props.userLogout()
        }
    }

    componentDidUpdate(prevProps) {
        let storedID = localStorage.getItem('userID');
        if (this.props.user && this.props.user.id !== storedID ) { //and doesn't equal current userID
            localStorage.setItem('userID', this.props.user.id);
        }
    }

    handleChange = (user) => {
        this.setState({
            ...this.state, ...user
        })
    }

    handleSubmit = (user) => {
        if (this.props.match.path === '/login'){
            this.props.userLogin(user, this.props.history)
        } else {
            this.props.userSignup(user, this.props.history)
        }
        this.props.history.push(`/users/${this.props.user.id}`)
    }

    render() {   
        return(
            <UserFormComponent submitCallback={this.handleSubmit.bind(this)} user={this.state} updateStateInParent={this.handleChange.bind(this)}/>
        )
    }
}

// const cachedUser = sessionStorage.getItem(this.state.username)

const mapStateToProps = (state) => {
    return {users: state.users, user: state.user}
}

export default connect(mapStateToProps, {userLogin, userLogout, userSignup})(UserForm)