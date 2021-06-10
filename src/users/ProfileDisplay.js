import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import User from './User'


function ProfileDisplay(props) {
    
    // want to get this from props when i figure it out
    const userId = parseInt(props.match.params.id)


    return(
        <>
        <User />
        <h3>Pronouns</h3>
           {props.user.pronouns && props.user.pronouns.map(p => <p id='profileContent' >{p.name}</p>)}
        <h3>Status</h3>
           {props.user.statuses && props.user.statuses.map(p => <p id='profileContent'>{p.name}</p>)}
        <h3>Identity</h3>
           {props.user.identities && props.user.identities.map(p => <p id='profileContent'>{p.name}</p>)}
        <h3>Looking For</h3>
           {props.user.lookingFors && props.user.lookingFors.map(p => <p id='profileContent'>{p.name}</p>)}
        <h3>Interests</h3>
           {props.user.interests && props.user.interests.map(p => <p id='profileContent'>{p.name}</p>)}
        <h3>Politics</h3>
           {props.user.politics && props.user.politics.map(p => <p id='profileContent'>{p.name}</p>)} 
        

             
            {/* <button onClick={this.handleClick()}>Edit Profile</button> */}
            <button> {<Link to={`/users/${userId}/profile/form`}> Edit </Link> }</button>
        </>
    )
}

const mapStateToProps = state => {return {users: state.users, user: state.user}}

export default connect(mapStateToProps) (ProfileDisplay)