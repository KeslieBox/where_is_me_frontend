import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import addUser from '../actions/addUser'
import UserFormComponent from './UserFormComponent'

class NewUserForm extends Component{

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
        this.props.addUser(user)
        // do i need this? uses withRouter component to add '/users' to the browser history
        this.props.history.push('/users')
    }

    render() {
        
        return(
            <UserFormComponent submitCallback={this.handleSubmit.bind(this)} user={this.state} updateStateInParent={this.handleChange.bind(this)}/>
        )
    }
}

// export default connect(null, {addUser})(NewUserForm)
// export default NewUserForm
export default withRouter(connect(null, {addUser})(NewUserForm))