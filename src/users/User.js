import {useSelector} from 'react-redux'

function User(props) {
    const users = useSelector(function(state) {return state.users})
    const user = users.find(u => u.id === parseInt(props.match.params.id))

    return(
        <h3>Welcome, {user && user.username}</h3>
    )
}

export default User