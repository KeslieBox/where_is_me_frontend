import { connect } from "react-redux";
import addMatch from '../actions/user/addMatch'
import fetchUsers from '../actions/fetchUsers'

 
 function Prowl (props){

    const handleClick = (e) => {
        e.preventDefault()
        const likedId = parseInt(e.target.id)
        debugger
        if (!props.user.liked.find(u => u.id === likedId) && props.user.id !== likedId) {
            props.addMatch(props.user.id, likedId)
        }
    }

    const newMatches = props.users && props.users.filter(u => u.id !== props.user.id && !props.user.liked.some(user => user.id === u.id))
    return(
        <>
        <ul>
            {newMatches.map(u => {
                return <>
                    <li key={u.id} className='prowl' >{u.username}</li> 
                    <button id={'prowl'} onClick={(e) => handleClick(e)}>Like</button>
                </>
            })}
        </ul>
        </>
    ) 
 }


 const mapStateToProps = (state) => { return {users: state.users, user: state.user }}

 export default connect(mapStateToProps, {addMatch, fetchUsers})(Prowl)