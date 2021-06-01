import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import addProfile from '../actions/addUser'
import showUser from '../actions/showUser'
import ProfileFormComponent from './ProfileFormComponent'
import fetchPronouns from '../actions/fetchPronouns'

class ProfileForm extends Component{
    debugger
    constructor(props){
        super(props)
        this.state = {
            pronouns: [],
            identity: [],
            interests: [],
            lookingFors: [],
            politics: [],
            status: [],
        }
    }

    componentDidMount(){
        debugger
        this.props.fetchPronouns()
        // this.props.fetchStatuses()
    }

    // patch request to assign these attributes, sending userId & ids associated w everything theyve selected
    // just need to iterate through each category option and display them to the page for the form
    handleChange = (user) => {
        debugger
        // this.setState({
        //     ...this.state, ...profile
        // })
    }

    handleSubmit = (user) => {
        debugger
        // if (this.props.users.find(u => u.username === user.username)) {
        //     const userId = this.props.users.find(u => u.username === user.username).id
        //     this.props.history.push(`/users/${userId}`)
        // } else {
        //     this.props.addUser(user, this.props.history)
        // }
    }

    // separate component for checkboxes to clean up repetititon

    render() {
        return(
            // <ProfileFormComponent handleSubmit={this.handleSubmit.bind(this)} user={this.state} handleChange={this.handleChange.bind(this)}/>
            <>
            Pronouns
            <form onSubmit={this.handleSubmit.bind(this)}>
                {this.props.pronouns && this.props.pronouns.map(profile => <ProfileFormComponent handleChange={this.handleChange.bind(this)} handleSubmit={this.handleSubmit.bind(this)} profile={profile} /> )}
                
                <input type="submit" value='Edit Profile'/>
            </form>
            </>
        )
    }
}

// do i need users?
const mapStateToProps = (state) => {return {users: state.users, pronouns: state.profile}}

export default connect(mapStateToProps, {addProfile, fetchPronouns})(ProfileForm)



// alphabetize
// Property.allProperties.sort((a, b) => {
//     if (a.name < b.name) {return -1}
//     if (a.name > b.name) {return 1}
//     return 0
// })


// table of checkboxes
// for(let i = 0; i < this.props.pronouns.length; i++){
    // <ProfileFormComponent onClick={this.handleClick} name="pronoun" value={profile.name} profile={profile} /> )}
//     if(i % 4 === 0){
//         tr = document.createElement('tr')
//         tr.className = 'tr'
//         table.appendChild(tr)
//     }
// }