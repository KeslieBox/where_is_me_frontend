import React, {Component} from 'react'
import {connect} from 'react-redux'
import userSignup from '../actions/user/userSignup'
import userLogin from '../actions/user/userLogin'
import userLogout from '../actions/user/userLogout'
import errorMessage from '../actions/user/errorMessage'
import UserFormComponent from './UserFormComponent'
import ErrorModal from './ErrorModal'

class UserForm extends Component{

    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }

    componentDidMount(){
        if (this.props.user && this.props.user.id){
            localStorage.setItem('userID', '')
            // this.props.userLogout()
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

    handleSubmit = async (user, e) => {
        e.preventDefault()
        if (this.props.history.location.pathname === '/login'){
            await this.props.userLogin(user, this.props.match.path, this.props.history)
            this.props.history.push(`/users/${this.props.user.id}`)
        } else if (this.props.user.message){
            this.props.errorMessage()
        } else if (this.state.username.length > 4 && this.state.password.length > 4 && !this.props.user.id && this.props.user.history === '/signup'){
            this.props.userSignup(user)
            this.props.history.push(`/users/${this.props.user.id}`)
        }
    }

    render() { 
        return (
            <>
                <UserFormComponent submitCallback={this.handleSubmit.bind(this)} history={this.props.history} user={this.state} updateStateInParent={this.handleChange.bind(this)}/>
                {this.props.user.error && this.props.user.error === 'error' ? <ErrorModal history={this.props.history} login={this.state} users={this.props.users} user={this.props.user}/> : ""}
            </>
        )
    }
}

const mapStateToProps = (state) => {return {users: state.users, user: state.user}}

export default connect(mapStateToProps, {userLogin, userLogout, userSignup, errorMessage})(UserForm)