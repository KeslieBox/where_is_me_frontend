import { Component } from "react";
import { connect } from "react-redux";

 
 class Matches extends Component {
// websockets/throttle, to every second update the current user to see the most recent users and update likers
     
    constructor() {
        super()
        this.state = {
            clicked: false,
            matches: []
        }
    }    

    handleLiked = (e) => {
        this.setState({
            clicked: true,
            matches: this.props.user.likers
        })
    }

    handleMatches = (e) => {
        this.setState({
            clicked: true,
            matches: [...this.props.user.liked, ...this.props.user.likers]
        })
    }


    render () {

        return(
            <>
            <ul>                
                {/* {this.state.matches && this.state.matches.map(u => <li>{u.username}</li>)} */}
                {this.props.user.mutualMatches && this.props.user.mutualMatches.map(u => <li key={u.id}>{u.username}</li>)}

            </ul>
            <button onClick={(e) => this.handleLiked(e)}>My Liked</button>
            <button onClick={(e) => this.handleMatches(e)}>My Matches</button>
            </>
        ) 
    }
 }

 //  if user !== current user || seenProfiles does not already include user, seenProfiles.push(user)

 const mapStateToProps = (state) => { return {users: state.users, user: state.user}}

 export default connect(mapStateToProps)(Matches)
