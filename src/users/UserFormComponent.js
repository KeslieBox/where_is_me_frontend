import React, {Component} from 'react'


class UserFormComponent extends Component {

    handleChange = (e) => {
        this.props.updateStateInParent({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => { 
        e.preventDefault()
        this.props.submitCallback(this.props.user)
    }

    // handleClick = () => {
    //     this.props.userLogin(user, this.props.match.path, this.props.history)
    // }

    render() {
        debugger
        const path = this.props.history.location.pathname
        return(
            <>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>Username</label>
                    <input type="text" onChange={this.handleChange} name="username" value={this.props.user && this.props.user.username} /><br></br>
                    <label>Password</label>
                    <input type="text" onChange={this.handleChange} name='password' value={this.props.user && this.props.user.password} /><br></br>
              
                    <input type="submit" value={path === '/login' ? 'Login' : 'Signup'}/> 
                </form>
                
                {/* <button onClick={this.handleClick}>Signup</button> */}
            </>
        )
    }
}

export default UserFormComponent