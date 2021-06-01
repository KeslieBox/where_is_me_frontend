import React, {Component} from 'react'
import {connect} from 'react-redux'
import fetchPronouns from '../actions/fetchPronouns'


class ProfileFormComponent extends Component {
   
    handleClick = (e) => {
        debugger
        // if e.target.checked === true, send a patch request to users/userId
        this.props.handleChange({[e.target.className]: e.target.name})
    }

    handleSubmit = (e) => { 
        e.preventDefault()
        debugger
        this.props.handleSubmit(this.props.profile)
    }

    

    render() {
        const pronouns = this.props.pronouns && this.props.pronouns.map(p => {
            <input type="checkbox" onClick={this.handleClick} name="pronoun" value={p.name}>{p.name}</input>
        })
        return(
            // <form onSubmit={this.handleSubmit.bind(this)}>
            //     {this.props.pronouns && this.props.pronouns.map(p => <input type="checkbox" onClick={this.handleClick} name="pronoun" value={p.name} /> )}
                
            //     <input type="submit" value='Edit Profile'/>
            // </form>
            <>
                <input type="checkbox" onClick={this.handleClick} name={this.props.profile.name} className='pronoun'/>
                <label htmlFor={this.props.profile.name}>{this.props.profile.name}</label><br/>
            </>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {users: state.users, pronouns: state.profile}
}

export default connect (mapStateToProps, {fetchPronouns})(ProfileFormComponent)



