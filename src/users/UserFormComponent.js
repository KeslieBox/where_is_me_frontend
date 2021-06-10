import React, {Component} from 'react'


function UserFormComponent(props) {

    const handleChange = (e) => {
        props.updateStateInParent({[e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => { 
        e.preventDefault()
        props.submitCallback(props.user)
    }

    // handleClick = () => {
    //     this.props.userLogin(user, this.props.match.path, this.props.history)
    // }

    const path = props.history.location.pathname
    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" onChange={handleChange} name="username" value={props.user && props.user.username} /><br></br>
                <label>Password</label>
                <input type="text" onChange={handleChange} name='password' value={props.user && props.user.password} /><br></br>
            
                <input type="submit" value={path === '/login' ? 'Login' : 'Signup'}/> 
            </form>
            
            {/* <button onClick={this.handleClick}>Signup</button> */}
        </>
    )
}

export default UserFormComponent