import React, {Component} from 'react'
import {connect} from 'react-redux'
import ProfileFormComponent from './ProfileFormComponent'
import Category from './Category'
import fetchCategories from '../actions/profile/fetchCategories'
import updateProfile from '../actions/user/updateProfile'

class ProfileForm extends Component{
    // local state to handle form input:
    constructor(props){
        super(props)
        this.state = {
            profile: {
            // using props in state only to send user data to checkboxes in this component
                pronoun_ids: this.props.user.pronounIds || [],
                identity_ids: this.props.user.identityIds || [],
                interest_ids: this.props.user.interestIds || [],
                looking_for_ids: this.props.user.lookingForIds || [],
                politic_ids: this.props.user.politicIds || [],
                status_ids: this.props.user.statusIds || []
            },
            checked: false
        }
    }

    componentDidMount(){
        categoriesArray.map(category => this.props.fetchCategories(category))
    }

    componentDidUpdate(prevProps){
        if (!prevProps.user.id && this.props.user.id){
            this.setState({
                profile: {
                    pronoun_ids: this.props.user.pronounIds,
                    identity_ids: this.props.user.identityIds,
                    interest_ids: this.props.user.interestIds,
                    looking_for_ids: this.props.user.lookingForIds,
                    politic_ids: this.props.user.politicIds,
                    status_ids: this.props.user.statusIds
              }

            })
        }
    }

    handleClick = (e, i) => {
        let category_ids
        debugger
        if (e.target.className === 'lookingForIds'){
            category_ids = `${e.target.className.split('ForIds')[0]}_for_ids`
        } else {
            category_ids = `${e.target.className.split('Ids')[0]}_ids`
        }
        let array = [...this.state.profile[category_ids], i]
        debugger
        this.setState({
            // ...this.state.profile, [e.target.className]: array,

            ...this.state, profile: {...this.state.profile, [category_ids]: array}, checked: e.target.checked


        })
    }

    // fixString = (category) => {
    //     debugger
    //     if (category.includes('ies')){
    //         return `${category.split('ies')[0]}y_ids`
    //     } else if (category.includes('es') && !category.includes('t')){
    //         return`${category.split('es')[0]}_ids`
    //     } else if (category.includes('ests')){
    //         return  `${category.split('s')[0]}est_ids`
    //         } else {
    //         return `${category.split('s')[0]}_ids`
    //     }
    // }

    handleSubmit = (e) => {
        debugger
        e.preventDefault()
        const userProfile = {...{username: this.props.user.username, id: this.props.user.id}, ...this.state.profile}
        this.props.updateProfile(userProfile, this.props.history)
        this.props.history.push(`/users/${this.props.user.id}/profile`)
    }

    // form = () => {
    //     return this.state
    // }

    // create separate component for checkboxes to clean up repetititon
    render() {
        return(
            // <ProfileFormComponent profile={this.state} handleSubmit={this.handleSubmit.bind(this)} handleChange={this.handleChange.bind(this)}/>
            <>
                {/* separate this out into category and checkboxes components */}
                {categoriesArray.map(c => {
                        return <> 
                        <Category category={c} form={this.state} handleClick={this.handleClick.bind(this)}/>
                        
                        </>
                    })}
                <form onSubmit={this.handleSubmit.bind(this)}>
                    {/* {categoriesArray.map(c => {
                        let categoryString = this.fixString(c)
                        return <>
                            <h3>{c.charAt(0).toUpperCase() + c.slice(1)}</h3>
                            <span className='checkboxes'>
                            {this.props.profile[c] && this.props.profile[c].map(i =>  {  
                                debugger 
                                    return <>
                                        <input type="checkbox" onClick={(e) => this.handleClick(e, i.id)} checked={this.state[categoryString].includes(i.id)} name={i.name} key={i.id} id={i.id} className={categoryString}/>
                                        <label htmlFor={i.name}>{i.name}</label><br/>
                                    </>
                                }
                            )}
                            </span>
                        </>
                    })} */} 
                    
                    {/* <h3>Pronouns</h3>
                    <span className='checkboxes'>
                    {this.props.profile.pronouns && this.props.profile.pronouns.map(c =>  {                            
                            return <>
                                <input type="checkbox" onClick={(e) => this.handleClick(e, c.id)} checked={this.state.pronoun_ids.includes(c.id)} name={c.name} key={c.id} id={c.id} className='pronoun_ids'/>
                                <label htmlFor={c.name}>{c.name}</label><br/>
                            </>
                        }
                    )}
                    </span>

                    <h3>Status</h3>
                    <span className='checkboxes'>
                    {this.props.profile.statuses && this.props.profile.statuses.map(c =>  
                        <>
                            <input type="checkbox" onClick={(e) => this.handleClick(e, c.id)} checked={this.state.status_ids.includes(c.id)} name={c.name} key={c.id} id={c.id} className='status_ids'/>
                            <label htmlFor={c.name}>{c.name}</label><br/>
                        </>
                    )}
                    </span>

                    <h3>Looking For</h3>
                    <span className='checkboxes'>
                    {this.props.profile.looking_fors && this.props.profile.looking_fors.map(c =>  
                        <>
                            <input type="checkbox" onClick={(e) => this.handleClick(e, c.id)} checked={this.state.looking_for_ids.includes(c.id)} name={c.name} key={c.id} id={c.id} className='looking_for_ids'/>
                            <label htmlFor={c.name}>{c.name}</label><br/>
                        </>
                    )}
                    </span>

                    <h3>Identities</h3>
                    <span className='checkboxes'>
                    {this.props.profile.identities && this.props.profile.identities.map(c =>  
                        <>
                            <input type="checkbox" onClick={(e) => this.handleClick(e, c.id)} checked={this.state.identity_ids.includes(c.id)} name={c.name}  key={c.id} id={c.id} className='identity_ids'/>
                            <label htmlFor={c.name}>{c.name}</label><br/>
                        </>
                    )}
                    </span>
                    
                    <h3>Interests</h3>
                    <span className='checkboxes'>
                    {this.props.profile.interests && this.props.profile.interests.map(c =>  
                        <>
                            <input type="checkbox" onClick={(e) => this.handleClick(e, c.id)} checked={this.state.interest_ids.includes(c.id)} name={c.name} key={c.id} id={c.id} className='interest_ids'/>
                            <label htmlFor={c.name}>{c.name}</label><br/>
                        </>
                    )}
                    </span>

                    <h3>Politics</h3>
                    <span className='checkboxes'>
                    {this.props.profile.politics && this.props.profile.politics.map(c =>  
                        <>
                            <input type="checkbox" onClick={(e) => this.handleClick(e, c.id)} checked={this.state.politic_ids.includes(c.id)} name={c.name} key={c.id} id={c.id} className='politic_ids'/>
                            <label htmlFor={c.name}>{c.name}</label><br/>
                        </>
                    )}
                    </span> */}


                    
                    <input type="submit" value='Edit Profile'/>
                </form>
            </>
        )
    }
}

// do i need users?
const mapStateToProps = (state) => {return {users: state.users, profile: state.profile, user: state.user}}
const categoriesArray = ['pronouns', 'statuses', 'looking_fors', 'identities', 'interests', 'politics']


// const actions = {}

export default connect(mapStateToProps, {updateProfile, fetchCategories})(ProfileForm)



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