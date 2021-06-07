import React, {Component} from 'react'
import {connect} from 'react-redux'
import fetchPronouns from '../actions/fetchPronouns'
// import Checkboxes from './Checkboxes'


class ProfileFormComponent extends Component {
   
    handleClick = (e) => {
        debugger
        // if e.target.checked === true, send a patch request to users/userId
        console.log(this.props.profile[e.target.className])
        // this.props.handleChange(this.props.pronouns.push(e.target.name))
        this.props.handleChange({[e.target.className]: e.target.name}, e.target.className, e.target.name)
        // this.props.handleChange({[e.target.className]: e.target.name})
        // this.props.sendProfile(this.props.profile)
    }

    handleSubmit = (e) => { 
        debugger
        e.preventDefault()
        debugger
        this.props.handleSubmit(this.props.profile)
    }

    render() {
       
        return(
            // // <>
            // <form onSubmit={this.handleSubmit.bind(this)}>
            //     {/* {this.props.pronouns && this.props.pronouns.map(p => <input type="checkbox" onClick={this.handleClick} name="pronoun" value={p.name} /> )} */}
            //     Profile
            //     <input type='text'/>
            //     <Checkboxes profile={this.props} />
            //     <input type="submit" value='Edit Profile'/>
            // </form>
            // // </>
            
            <>
                <input type="checkbox" onClick={this.handleClick} name={this.props.pronoun.name} className='pronouns'/>
                <label htmlFor={this.props.pronoun.name}>{this.props.pronoun.name}</label><br/>
            </>
            
        )
    }
}

// do i need this here if getting props from profile form??
const mapStateToProps = (state) => {
    debugger
    return {users: state.users, pronouns: state.profile}
}

export default connect (mapStateToProps, {fetchPronouns})(ProfileFormComponent)



