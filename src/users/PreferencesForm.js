import { Component } from "react";
import { connect } from "react-redux";
import {Route, Switch} from 'react-router-dom'
 
 class PreferencesForm extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            // using props in state only to send user data to checkboxes in this component
            pronoun_ids: this.props.user.pronounIds || [],
            identity_ids: this.props.user.identityIds || [],
            interest_ids: this.props.user.interestIds || [],
            looking_for_ids: this.props.user.lookingForIds || [],
            politic_ids: this.props.user.politicIds || [],
            status_ids: this.props.user.statusIds || []
        }
    }

    componentDidMount(){
        categoriesArray.map(category => this.props.fetchCategories(category))
    }

    componentDidUpdate(prevProps){
        if (!prevProps.user.id && this.props.user.id){
            this.setState({
                pronoun_ids: this.props.user.pronounIds,
                identity_ids: this.props.user.identityIds,
                interest_ids: this.props.user.interestIds,
                looking_for_ids: this.props.user.lookingForIds,
                politic_ids: this.props.user.politicIds,
                status_ids: this.props.user.statusIds
            })
        }
    }

    handleClick = (e, id) => {
        let array = [...this.state[e.target.className], id]
        this.setState({
            ...this.state, [e.target.className]: array 
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
        e.preventDefault()
        const userProfile = {...{username: this.props.user.username, id: this.props.user.id}, ...this.state}
        this.props.addProfile(userProfile, this.props.history)
        this.props.history.push(`/users/${this.props.user.id}/profile`)
    }

    // create separate component for checkboxes to clean up repetititon
    render() {
        return(
            // <ProfileFormComponent profile={this.state} handleSubmit={this.handleSubmit.bind(this)} handleChange={this.handleChange.bind(this)}/>
            <>
                <form onSubmit={this.handleSubmit.bind(this)}>

                    <h3>Status</h3>
                    <span className='checkboxes'>
                        {/* display users who... */}
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
                    </span>


                    
                    <input type="submit" value='Edit Profile'/>
                </form>
            </>
        )
    }
 }

 const mapStateToProps = (state) => { return {users: state.users, user: state.user, matches: state.matches }}

 export default connect(mapStateToProps)(PreferencesForm)