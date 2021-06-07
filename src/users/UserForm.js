import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import userSignup from '../actions/userSignup'
import userLogin from '../actions/userLogin'
import userLogout from '../actions/userLogout'
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
        debugger
        // do i want to handle logout here?
        if (this.props.user && this.props.user.id){
            localStorage.setItem('userID', '')
            this.props.userLogout()
        }
    }

    componentDidUpdate(prevProps) {
        let storedID = localStorage.getItem('userID');
        if (this.props.user && this.props.user.id !== storedID ) { //and doesn't equal current userID
            debugger
            localStorage.setItem('userID', this.props.user.id);
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
        //     this.props.userSignup(user)
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

        // localStorage
        // const cachedUser = localStorage.getItem(this.state.username)
        // if (cachedUser){
        //     this.setState({ username: cachedUser })
        // }
        // if (this.props.users.find(u => u.username === user.username)) {
        //     const userId = this.props.users.find(u => u.username === user.username).id
        //     // create current user in redux state action creator that returns the action object that uses reducer to set current user
        //     this.props.history.push(`/users/${userId}`)
        if (this.props.match.path === '/login'){
            this.props.userLogin(user, this.props.history)
            debugger
        } else {
            this.props.userSignup(user, this.props.history)
            debugger
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
    return {users: state.users, user: state.user}
}


// export default connect(null, {userSignup})(NewUserForm)
// export default NewUserForm
// withRouter gives me access to history
export default withRouter(connect(mapStateToProps, {userLogin, userLogout, userSignup})(UserForm))