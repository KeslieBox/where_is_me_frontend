import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
// import showUser from '../actions/userLogin'
import ProfileFormComponent from './ProfileFormComponent'
import fetchIdentities from '../actions/profile/fetchIdentities'
import fetchInterests from '../actions/profile/fetchInterests'
import fetchLookingFors from '../actions/profile/fetchLookingFors'
import fetchPolitics from '../actions/profile/fetchPolitics'
import fetchPronouns from '../actions/profile/fetchPronouns'
import fetchStatuses from '../actions/profile/fetchStatuses'
import addProfile from '../actions/user/addProfile'

class ProfileForm extends Component{
    debugger
    // local state to handle form input:
    constructor(props){
        super(props)
        this.state = {
            pronoun_ids: [],
            identity_ids: [],
            interest_ids: [],
            looking_for_ids: [],
            politic_ids: [],
            status_ids: [],
        }
    }

    componentDidMount(){
        this.props.fetchIdentities()
        this.props.fetchInterests()
        this.props.fetchLookingFors()
        this.props.fetchPolitics()
        this.props.fetchPronouns()
        this.props.fetchStatuses()
    }

    // patch request to assign these attributes, sending userId & ids associated w everything theyve selected
    // just need to iterate through each category option and display them to the page for the form
    handleChange = (e) => {
        // ...this.state, [e.target.name]: array
        let array = [...this.state[e.target.className], e.target.id]
        this.setState({
            ...this.state, [e.target.className]: array 
            // ...this.state[e.target.className].push(e.target.name) -- old solution
            // ...this.state, [e.target.name]: array --annabel solution
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const userProfile = {...{username: this.props.user.username, id: this.props.user.id}, ...this.state}
        this.props.addProfile(userProfile, this.props.history)
        this.props.history.push(`/users/${this.props.user.id}/profile`)
        
        // how to send input values from profile form component to this component when the submit button lives here??

    }

    handleName = (e) => {
        debugger
    }

    // separate component for checkboxes to clean up repetititon

    render() {
        debugger
        return(
            // <ProfileFormComponent profile={this.state} handleSubmit={this.handleSubmit.bind(this)} handleChange={this.handleChange.bind(this)}/>
            <>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <h3>Pronouns</h3>
                    <span className='checkboxes'>
                    {this.props.profile.pronouns && this.props.profile.pronouns.map(p =>  
                        <>
                            <input type="checkbox" onClick={this.handleChange} name={p.name} key={p.id} id={p.id} className='pronoun_ids'/>
                            <label htmlFor={p.name}>{p.name}</label><br/>
                        </>
                    )}
                    </span>

                    <h3>Status</h3>
                    <span className='checkboxes'>
                    {this.props.profile.statuses && this.props.profile.statuses.map(s =>  
                        <>
                            <input type="checkbox" onClick={this.handleChange} name={s.name} key={s.id} id={s.id} className='status_ids'/>
                            <label htmlFor={s.name}>{s.name}</label><br/>
                        </>
                    )}
                    </span>

                    <h3>Looking For</h3>
                    <span className='checkboxes'>
                    {this.props.profile.looking_fors && this.props.profile.looking_fors.map(s =>  
                        <>
                            <input type="checkbox" onClick={this.handleChange} name={s.name} key={s.id} id={s.id} className='looking_for_ids'/>
                            <label htmlFor={s.name}>{s.name}</label><br/>
                        </>
                    )}
                    </span>

                    <h3>Identities</h3>
                    <span className='checkboxes'>
                    {this.props.profile.identities && this.props.profile.identities.map(s =>  
                        <>
                            <input type="checkbox" onClick={this.handleChange} name={s.name}  key={s.id} id={s.id} className='identity_ids'/>
                            <label htmlFor={s.name}>{s.name}</label><br/>
                        </>
                    )}
                    </span>
                    
                    <h3>Interests</h3>
                    <span className='checkboxes'>
                    {this.props.profile.interests && this.props.profile.interests.map(s =>  
                        <>
                            <input type="checkbox" onClick={this.handleChange} name={s.name} key={s.id} id={s.id} className='interest_ids'/>
                            <label htmlFor={s.name}>{s.name}</label><br/>
                        </>
                    )}
                    </span>

                    <h3>Politics</h3>
                    <span className='checkboxes'>
                    {this.props.profile.politics && this.props.profile.politics.map(s =>  
                        <>
                            <input type="checkbox" onClick={this.handleChange} name={s.name} key={s.id} id={s.id} className='politic_ids'/>
                            <label htmlFor={s.name}>{s.name}</label><br/>
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
const mapStateToProps = (state) => {return {users: state.users, profile: state.profile, user: state.user}}

// const actions = {}

export default connect(mapStateToProps, {addProfile, fetchIdentities, fetchInterests, fetchLookingFors, fetchPolitics, fetchPronouns, fetchStatuses})(ProfileForm)



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