import React, {Component} from 'react'
import {connect} from 'react-redux'
import Category from './Category'
import fetchCategories from '../actions/profile/fetchCategories'
import updateProfile from '../actions/user/updateProfile'
import fixString from './fixString'

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

                    // pronoun_ids: this.state.profile.pronoun_ids,
                    // identity_ids: this.state.profile.identity_ids,
                    // interest_ids: this.state.profile.interest_ids,
                    // looking_for_ids: this.state.profile.looking_for_ids,
                    // politic_ids: this.state.profile.politic_ids,
                    // status_ids: this.state.profile.status_ids

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
        category_ids = this.category_ids(e)
        categoryIds = e.className

        let array = [...this.state.profile[category_ids], i]
        if(!this.state.profile[category_ids].includes(i)){
            this.setState({
                ...this.state, profile: {...this.state.profile, [category_ids]: array}, checked: e.checked
            })
        }
        

        // if(!this.state.profile[category_ids].includes(i)){
        //     const newState = {...this.state, profile: {...this.state.profile, [category_ids]: array}, checked: e.checked}
        //     // const userProfile = {...{username: this.props.user.username, id: this.props.user.id}, ...this.state.profile}
        //     this.setState(newState, () => {
        //         const userProfile = {...{username: this.props.user.username, id: this.props.user.id}, ...newState.profile}
        //         debugger
        //         this.props.updateProfile(userProfile)
        //         // if(this.state.profile[category_ids] === this.props.user[e.className]){}
        //     })
        // }
        if(e.checked === false){
            const indexI = this.state.profile[category_ids].indexOf(i)
            array = [...this.state.profile[category_ids].splice(indexI, 1)]
            this.setState({
                ...this.state.profile[category_ids]
            })
        }
    }


    handleSubmit = (e) => {
        debugger
        e.preventDefault()
        const userProfile = {...{username: this.props.user.username, id: this.props.user.id}, ...this.state.profile}
        this.props.updateProfile(userProfile)
        // how to delay rendering profile page to wait for fetch request to finish updating user?
        // const renderProfileDisplay = () => {
            // if(this.props.user[categoryIds] === this.state.profile[category_ids]){
                this.props.history.push(`/users/${this.props.user.id}/profile`)
            // }
        // }

            // async function firstFunction(props){
            //     debugger
                // await this.props.updateProfile(userProfile)
                // do something else here after firstFunction completes
            // }
    
            // async function secondFunction(props){
            //     debugger
            //     await firstFunction(props)
            //     debugger
        
        // renderProfileDisplay()
        // this.props.history.push(`/users/${this.props.user.id}/profile`)
    }

    render() {
        return(
            <>
                {categoriesArray.map((c, i) => {
                        return <> 
                        <Category key={i} category={c} form={this.state} handleClick={this.handleClick.bind(this)}/>
                        
                        </>
                    })}
                <form onSubmit={this.handleSubmit.bind(this)}>                  
                    <input type="submit" value='Edit Profile'/>
                </form>
            </>
        )
    }
}

const mapStateToProps = (state) => {return {profile: state.profile, user: state.user}}
const categoriesArray = ['pronouns', 'statuses', 'looking_fors', 'identities', 'interests', 'politics']
let category_ids
let categoryIds

export default connect(mapStateToProps, {updateProfile, fetchCategories})(ProfileForm)



// alphabetize
// Property.allProperties.sort((a, b) => {
//     if (a.name < b.name) {return -1}
//     if (a.name > b.name) {return 1}
//     return 0
// })

