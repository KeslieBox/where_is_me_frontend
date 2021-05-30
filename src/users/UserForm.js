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
        debugger
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
        if (this.props.users.find(u => u.username === user.username)) {
            const userId = this.props.users.find(u => u.username === user.username).id
            this.props.history.push(`/users/${userId}`)
        } else {
            this.props.addUser(user, this.props.history)
            debugger
        }

    }

    render() {
        
        return(
            <UserFormComponent submitCallback={this.handleSubmit.bind(this)} user={this.state} updateStateInParent={this.handleChange.bind(this)}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {users: state.users}
}


// export default connect(null, {addUser})(NewUserForm)
// export default NewUserForm
export default withRouter(connect(mapStateToProps, {addUser, showUser})(UserForm))