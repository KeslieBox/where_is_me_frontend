import React, {Component} from 'react'
import {connect} from 'react-redux'
import Category from './Category'
import fetchCategories from '../actions/fetchCategories'
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

    category_ids = (e) => {
        if (e.className === 'lookingForIds'){
            return `${e.className.split('ForIds')[0]}_for_ids`
        } else {
            return `${e.className.split('Ids')[0]}_ids`
        }
    }

    handleClick = (e, i) => {
        let category_ids = this.category_ids(e)

        let array = [...this.state.profile[category_ids], i]
        if(!this.state.profile[category_ids].includes(i)){
            this.setState({
                ...this.state, profile: {...this.state.profile, [category_ids]: array}, checked: e.checked
            })
        }
        
        if(e.checked === false){
            const indexI = this.state.profile[category_ids].indexOf(i)
            array = [...this.state.profile[category_ids].splice(indexI, 1)]
            this.setState({
                ...this.state.profile[category_ids]
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const userProfile = {...{username: this.props.user.username, id: this.props.user.id}, ...this.state.profile}
        this.props.updateProfile(userProfile)
        this.props.history.push(`/users/${this.props.user.id}/profile`)
    }

    render() {
        return(
            <>
                {categoriesArray.map((c, i) => {
                    return <Category key={i} category={c} form={this.state} handleClick={this.handleClick.bind(this)}/>
                })}
                <form id='profileForm' onSubmit={this.handleSubmit.bind(this)}>                  
                    <input id='editFormButton' type="submit" value='Edit Profile'/>
                </form>
            </>
        )
    }
}

const mapStateToProps = (state) => {return {profile: state.profile, user: state.user}}
const categoriesArray = ['pronouns', 'statuses', 'looking_fors', 'identities', 'interests', 'politics']

export default connect(mapStateToProps, {updateProfile, fetchCategories})(ProfileForm)



