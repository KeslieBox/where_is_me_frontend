import React from 'react'
import { Component } from 'react'
import {connect} from 'react-redux'

class Checkboxes extends Component {
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

    handleClick = (e, id) => {
        this.props.handleClick(e, id)
    }

    fixString = (category) => {
        if (category.includes('ies')){
            return categoryString = `${category.split('ies')[0]}y_ids`
        } else if (category.includes('es') && !category.includes('est')){
            return categoryString = `${category.split('es')[0]}_ids`
        } else if (category.includes('ests')){
            return categoryString = `${category.split('s')[0]}st_ids`
            } else {
            return categoryString = `${category.split('s')[0]}_ids`
        }
    }
   

    render() {
        debugger
        {this.fixString(this.props.c)}
        return ( 
            <>
                <input type="checkbox" onClick={(e) => this.handleClick(e, this.props.i.id)} checked={this.state[categoryString].includes(this.props.i.id)} name={this.props.i.name} key={this.props.i.id} id={this.props.i.id} className={categoryString}/>
                <label htmlFor={this.props.i.name}>{this.props.i.name}</label><br/>
            </>
        )
    }
}

const mapStateToProps = (state) => {return {users: state.users, profile: state.profile, user: state.user}}
let categoryString 

export default connect(mapStateToProps) (Checkboxes)