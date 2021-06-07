import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


function ProfileDisplay(props) {
    debugger
    
    // want to get this from props when i figure it out
    const userId = parseInt(props.match.params.id)

    debugger

    return(
        <>
           {props.user.pronouns && props.user.pronouns.map(p => <p>{p.name}</p>)}

             
            {/* <button onClick={this.handleClick()}>Edit Profile</button> */}
            <button> {<Link to={`/users/${userId}/profile/form`}> Edit </Link> }</button>
        </>
    )
}

const mapStateToProps = state => {
    debugger
    return {users: state.users, user: state.user}
}

export default connect(mapStateToProps) (ProfileDisplay)