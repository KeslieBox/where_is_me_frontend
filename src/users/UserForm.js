import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import addUser from '../actions/addUser'
import showUser from '../actions/showUser'
import UserFormComponent from './UserFormComponent'

class UserForm extends Component{

    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (user) => {
        this.setState({
            ...this.state, ...user
        })
    }

    handleSubmit = (user) => {
        // if (this.props.location.pathname === '/users/login') {
        //     this.props.showUser(user) 
        //     const userId = this.props.users.find(u => u.username === user.username).id
        //     this.props.history.push(`/users/${userId}`)
        // } else { 
        //     debugger 
        //     this.props.addUser(user)
        //     debugger
        //     if (this.props.users.find(u => u.username === user.username)){
        //         debugger
        //         const userId = this.props.users.find(u => u.username === user.username).id
        //         this.props.history.push(`/users/${userId}`)
        //     }
        // }
        // if (this.props.location.pathname === '/users/login') {
        //     this.props.showUser(user) 
        // } else 

        // sessionStorage
        // const cachedUser = sessionStorage.getItem(this.state.username)
        // if (cachedUser){
        //     this.setState({ username: cachedUser })
        // }
        if (this.props.users.find(u => u.username === user.username)) {
            const userId = this.props.users.find(u => u.username === user.username).id
            // create current user in redux state action creator that returns the action object that uses reducer to set current user
            this.props.history.push(`/users/${userId}`)
        } else {
            this.props.addUser(user, this.props.history)
        }
    }

    render() {   
        return(
            <UserFormComponent submitCallback={this.handleSubmit.bind(this)} user={this.state} updateStateInParent={this.handleChange.bind(this)}/>
        )
    }
}

// const cachedUser = sessionStorage.getItem(this.state.username)

const mapStateToProps = (state) => {
    return {users: state.users}
}


// export default connect(null, {addUser})(NewUserForm)
// export default NewUserForm
// withRouter gives me access to history
export default withRouter(connect(mapStateToProps, {addUser, showUser})(UserForm))