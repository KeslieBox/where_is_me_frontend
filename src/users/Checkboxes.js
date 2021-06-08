import React from 'react'
import { Component } from 'react'
import {connect} from 'react-redux'

class Checkboxes extends Component {
    
    componentDidMount(){
        // this.props.fetchStatuses()
    }

    debugger
    render() {
        return ( 
      <>
        {this.props.pronouns && this.props.pronouns.map(p => <input type="checkbox" onClick={this.handleClick} name="pronoun" value={p.name}></input>)} 
         
     </>
        )
    }
}

const mapStateToProps = (state) => {
    debugger
    return {users: state.users, pronouns: state.profile}
}

export default connect(mapStateToProps) (Checkboxes)