import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import showUser from '../actions/userLogin'
import ProfileFormComponent from './ProfileFormComponent'
import fetchPronouns from '../actions/fetchPronouns'
import addProfile from '../actions/addProfile'

class ProfileForm extends Component{
    debugger
    // local state to handle form input:
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
        this.props.fetchPronouns()
        // this.props.fetchStatuses()
    }

    // patch request to assign these attributes, sending userId & ids associated w everything theyve selected
    // just need to iterate through each category option and display them to the page for the form
    handleChange = (e) => {
        debugger
        
        this.setState({
            // how to access pronouns dynamically using string passed in as arg??
            // ...this.state[profileKey].push(input)
            // ...this.state[profileKey], input
            // ...this.state.pronouns, ...input
            ...this.state[e.target.className].push(e.target.name)
        })
    }

    handleSubmit = (e) => {
        debugger
        this.props.addProfile(this.props.user, this.props.history)
        // how to send input values from profile form component to this component when the submit button lives here??

        // if (this.props.users.find(u => u.username === user.username)) {
        //     const userId = this.props.users.find(u => u.username === user.username).id
        //     this.props.history.push(`/users/${userId}`)
        // } else {
        //     this.props.addUser(user, this.props.history)
        // }
    }

    // separate component for checkboxes to clean up repetititon

    render() {
        debugger
        return(
            // <ProfileFormComponent profile={this.state} handleSubmit={this.handleSubmit.bind(this)} handleChange={this.handleChange.bind(this)}/>
            <>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <h3>Pronouns</h3>
                    {/* not using handle submit here bc the form is in this component not the formcontent */}
                    {/* {this.props.pronouns && this.props.pronouns.map(pronoun => <ProfileFormComponent handleChange={this.handleChange.bind(this)} handleSubmit={this.handleSubmit.bind(this)} sendProfile={this.sendProfile} pronoun={pronoun} profile={this.state}/> )} */}
                    <span className='checkboxes'>
                    {this.props.pronouns && this.props.pronouns.map(pronoun =>  
                        <>
                            <input type="checkbox" onClick={this.handleChange} name={pronoun.name} className='pronouns'/>
                            <label htmlFor={pronoun.name}>{pronoun.name}</label><br/>
                        </>
                    )}
                    </span>
                    
                    <input type="submit" value='Edit Profile'/>
                </form>
            </>
        )
    }
}

// do i need users?
const mapStateToProps = (state) => {
    debugger
    return {users: state.users, pronouns: state.profile, user: state.user}}

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