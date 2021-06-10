import {connect} from 'react-redux'

function User(props) {
    return(
        <h1>Welcome, {props.user && props.user.username}</h1>
    )
}

const mapStateToProps = (state) => {return {users: state.users, user: state.user}}

export default connect(mapStateToProps)(User)