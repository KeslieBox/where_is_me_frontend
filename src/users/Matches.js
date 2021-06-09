import { Component } from "react";
import { connect } from "react-redux";

 
 class Matches extends Component {
// websockets/throttle, to every second update the current user to see the most recent users and update likers
     
    constructor() {
        super()
        this.state = {
            clicked: false,
            matches: [],
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

    handleIncrement = (id) => {
        this.setState(prevState => {
            if (prevState[id]){ 
                return {
                    [id]: prevState[id] + 1,
                }
            } else {
                return {[id]: 1}
            }
        })  
    }


    render () {

        return(
            <>
            <ul>                
                {/* {this.state.matches && this.state.matches.map(u => <li>{u.username}</li>)} */}
                {/* {this.props.user.mutualMatches && this.props.user.mutualMatches.map(u => <li key={u.id}>{u.username}</li>)} */}
                {this.props.user.mutualMatches && this.props.user.mutualMatches.map(u => {
                        return <>
                            <li key={u.id}>{u.username}, {this.state[u.id]} </li> 
                            <button onClick={(e) => this.handleIncrement(u.id)}>+</button>
                        </>
                })}
                
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
