import React, {Component} from 'react'
import {connect} from 'react-redux'
import fetchPronouns from '../actions/profile/fetchPronouns'
// import Checkboxes from './Checkboxes'


class ProfileFormComponent extends Component {
   
    handleClick = (e) => {
        debugger
        // if e.target.checked === true, send a patch request to users/userId
        this.props.handleChange({[e.target.className]: e.target.name}, e.target.className, e.target.name)
    }

    handleSubmit = (e) => { 
        debugger
        e.preventDefault()
        debugger
        this.props.handleSubmit(this.props.profile)
    }

    render() {
       
        return(            
            <>
                <input type="checkbox" onClick={this.handleClick} name={this.props.pronoun.name} className='pronouns'/>
                <label htmlFor={this.props.pronoun.name}>{this.props.pronoun.name}</label><br/>
            </>   
        )
    }
}

// do i need this here if getting props from profile form??
const mapStateToProps = (state) => {
    return {users: state.users, pronouns: state.profile}
}

export default connect (mapStateToProps, {fetchPronouns})(ProfileFormComponent)



