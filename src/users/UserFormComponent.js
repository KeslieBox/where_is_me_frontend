import React, {Component} from 'react'


class UserFormComponent extends Component {

    handleChange = (e) => {
        this.props.updateStateInParent({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => { 
        e.preventDefault()
        debugger
        this.props.submitCallback(this.props.user)
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" onChange={this.handleChange} name="username" value={this.props.user && this.props.user.username} />
                <input type="text" onChange={this.handleChange} name='password' value={this.props.user && this.props.user.password} />
        
                <input type="submit" value='Signup'/>
            </form>
        )
    }
}

export default UserFormComponent