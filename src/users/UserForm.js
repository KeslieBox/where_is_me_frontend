import React, {Component} from 'react'
import {connect} from 'react-redux'
import userSignup from '../actions/user/userSignup'
import userLogin from '../actions/user/userLogin'
import userLogout from '../actions/user/userLogout'
import errorMessage from '../actions/user/errorMessage'
import fetchUsers from '../actions/fetchUsers'
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

    handleSubmit = (user, e) => {
        e.preventDefault()
        debugger
        // checks if username and password are longer than 4 characters or if there is a user w/that info that is present in the users arrays
        if(this.props.users.some(u => u.username === user.username)){
            this.props.userLogin(user, this.props.match.path)
            this.props.history.push(`/users/${this.props.user.id}`)
        } else {
            this.setState({
                username: user.username,
                password: user.password
            })
            if (this.state.username.length > 4 && this.state.password.length > 4 && !this.props.users.some(u => u.username === user.username)){
                this.props.userSignup(user)
                debugger
                this.props.history.push(`/users/${this.props.user.id}`)
            }else { 
                this.props.errorMessage()
            }
        }

    }

    render() { 
        {if(this.props.user.error && this.props.user.error === 'error'){
            return (
                <>
                    <ErrorModal history={this.props.history} login={this.state}/>
                    <UserFormComponent submitCallback={this.handleSubmit.bind(this)} history={this.props.history} user={this.state} updateStateInParent={this.handleChange.bind(this)}/>
                </>
            )
        }} 
        return(
            <UserFormComponent submitCallback={this.handleSubmit.bind(this)} history={this.props.history} user={this.state} updateStateInParent={this.handleChange.bind(this)}/>

        )
    }
}

const mapStateToProps = (state) => {return {users: state.users, user: state.user}}

export default connect(mapStateToProps, {userLogin, userLogout, userSignup, errorMessage, fetchUsers})(UserForm)