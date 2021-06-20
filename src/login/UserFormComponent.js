import { Component } from 'react'
import {connect} from 'react-redux'
import errorMessage from '../actions/user/errorMessage'

class UserFormComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        this.props.updateStateInParent({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => { 
        e.preventDefault()
        // if fetching user sends error message && route is login && login is invalid
        debugger
        // if (this.props.user.message && this.props.history.location.pathname === '/login' && !this.state.username.length > 4 || !this.state.password.length > 4) {
        //     this.props.errorMessage()
        // }else {
            this.props.submitCallback(this.state, e)
        // }
    }

    render() {
    const path = this.props.history.location.pathname
    return(
        <>
            <form className='userForm' onSubmit={this.handleSubmit}>
                <label>Username</label>
                <input type="text" id='formInput' onChange={this.handleChange} name="username" value={this.state.username} /><br></br>
                <label>Password</label>
                <input type="text" id='formInput'  onChange={this.handleChange} name='password' value={this.state.password} /><br></br>
            
                <input type="submit" value={path === '/login' ? 'Login' : 'Signup'}/> 
            </form>   
        </>
    )
    }
}

const mapStateToProps = (state) => {return {users: state.users, user: state.user}}

export default connect(mapStateToProps, {errorMessage})(UserFormComponent)