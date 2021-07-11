import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import User from './User'

function ProfileDisplay(props) {
   return(
      <>
      <User />
      <div id='profile'>
      <h1 id='editPro'>Edit Profile:</h1><br></br>
      <h3 id='profileLabel'>Pronouns</h3>
         {props.user.pronouns && props.user.pronouns.map(p => <li key={p.id} id='profileContent' >{p.name}</li>)}
      <h3 id='profileLabel'>Status</h3>
         {props.user.statuses && props.user.statuses.map(p => <li key={p.id} id='profileContent'>{p.name}</li>)}
      <h3 id='profileLabel'>Identity</h3>
         {props.user.identities && props.user.identities.map(p => <li key={p.id} id='profileContent'>{p.name}</li>)}
      <h3 id='profileLabel'>Looking For</h3>
         {props.user.lookingFors && props.user.lookingFors.map(p => <li key={p.id} id='profileContent'>{p.name}</li>)}
      <h3 id='profileLabel'>Interests</h3>
         {props.user.interests && props.user.interests.map(p => <li key={p.id} id='profileContent'>{p.name}</li>)}
      <h3 id='profileLabel'>Politics</h3>
         {props.user.politics && props.user.politics.map(p => <li key={p.id} id='profileContent'>{p.name}</li>)} 

      <button> {<Link id='editButton' to={`/users/${props.user.id}/profile/form`}> Edit </Link> }</button>
      </div>
      </>
   )
}

const mapStateToProps = state => {return {users: state.users, user: state.user}}

export default connect(mapStateToProps)(ProfileDisplay)