import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


function ProfileDisplay(props) {
    debugger
    
    // want to get this from props when i figure it out
    const userId = parseInt(props.match.params.id)

    debugger

    return(
        <>
        <h3>Pronouns</h3>
           {props.user.pronouns && props.user.pronouns.map(p => <p>{p.name}</p>)}
        <h3>Status</h3>
           {props.user.statuses && props.user.statuses.map(p => <p>{p.name}</p>)}
        <h3>Identity</h3>
           {props.user.identities && props.user.identities.map(p => <p>{p.name}</p>)}
        <h3>Looking For</h3>
           {props.user.looking_fors && props.user.looking_fors.map(p => <p>{p.name}</p>)}
        <h3>Interests</h3>
           {props.user.interests && props.user.interests.map(p => <p>{p.name}</p>)}
        <h3>Politics</h3>
           {props.user.politics && props.user.politics.map(p => <p>{p.name}</p>)} 
        

             
            {/* <button onClick={this.handleClick()}>Edit Profile</button> */}
            <button> {<Link to={`/users/${userId}/profile/form`}> Edit </Link> }</button>
        </>
    )
}

const mapStateToProps = state => {
    return {users: state.users, user: state.user}
}

export default connect(mapStateToProps) (ProfileDisplay)