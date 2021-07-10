import { connect } from "react-redux";
 
function Liked (props) {        
    return(
        <ul>                
            {props.user.liked && props.user.liked.map(u => {
                return <li key={u.id}>{u.username}</li> 
            })}
        </ul>
    ) 
 }

const mapStateToProps = (state) => { return {users: state.users, user: state.user}}

export default connect(mapStateToProps)(Liked)
