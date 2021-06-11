import {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import User from './User'


class ProfileDisplay extends Component{

   componentDidUpdate(prevProps){
      
   }

    render(){
      return(
         <>
         <User />
         <h3>Pronouns</h3>
            {this.props.user.pronouns && this.props.user.pronouns.map(p => <p id='profileContent' >{p.name}</p>)}
         <h3>Status</h3>
            {this.props.user.statuses && this.props.user.statuses.map(p => <p id='profileContent'>{p.name}</p>)}
         <h3>Identity</h3>
            {this.props.user.identities && this.props.user.identities.map(p => <p id='profileContent'>{p.name}</p>)}
         <h3>Looking For</h3>
            {this.props.user.lookingFors && this.props.user.lookingFors.map(p => <p id='profileContent'>{p.name}</p>)}
         <h3>Interests</h3>
            {this.props.user.interests && this.props.user.interests.map(p => <p id='profileContent'>{p.name}</p>)}
         <h3>Politics</h3>
            {this.props.user.politics && this.props.user.politics.map(p => <p id='profileContent'>{p.name}</p>)} 

            <button> {<Link to={`/users/${this.props.user.id}/profile/form`}> Edit </Link> }</button>
         </>
      )
    }
}

const mapStateToProps = state => {return {users: state.users, user: state.user}}

export default connect(mapStateToProps)(ProfileDisplay)