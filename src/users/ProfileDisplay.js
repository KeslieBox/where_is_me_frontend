import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import User from './User'

function ProfileDisplay(props) {
   return(
      <>
      <User />
      <h3>Pronouns</h3>
         {props.user.pronouns && props.user.pronouns.map(p => <p key={p.id} id='profileContent' >{p.name}</p>)}
      <h3>Status</h3>
         {props.user.statuses && props.user.statuses.map(p => <p key={p.id} id='profileContent'>{p.name}</p>)}
      <h3>Identity</h3>
         {props.user.identities && props.user.identities.map(p => <p key={p.id} id='profileContent'>{p.name}</p>)}
      <h3>Looking For</h3>
         {props.user.lookingFors && props.user.lookingFors.map(p => <p key={p.id} id='profileContent'>{p.name}</p>)}
      <h3>Interests</h3>
         {props.user.interests && props.user.interests.map(p => <p key={p.id} id='profileContent'>{p.name}</p>)}
      <h3>Politics</h3>
         {props.user.politics && props.user.politics.map(p => <p key={p.id} id='profileContent'>{p.name}</p>)} 

      <button> {<Link to={`/users/${props.user.id}/profile/form`}> Edit </Link> }</button>
      </>
   )
}

const mapStateToProps = state => {return {users: state.users, user: state.user}}

export default connect(mapStateToProps)(ProfileDisplay)