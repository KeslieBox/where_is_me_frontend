import { Component } from "react";
import { connect } from "react-redux";
 
class Matches extends Component {     
    constructor() {
        super()
        this.state = {
            clicked: false,
            matches: [],
        }
    }    

    // coding challenge: liked and mutual likes
    handleLiked = (e) => {
        this.setState({
            clicked: true,
            matches: this.props.user.liked
        })
    }

    handleMatches = (e) => {
        this.setState({
            clicked: true,
            matches: this.props.user.mutualMatches
        })
    }

    // coding challenge: counter
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
                {this.state.matches && this.state.matches.map(u => {
                    return <>
                        <li key={u.id}>{u.username} {this.state[u.id]} </li> 
                        {/* <button onClick={(e) => this.handleIncrement(u.id)}>+</button> */}
                    </>
                })}
                
            </ul>
            <button id='matchesButton1' onClick={(e) => this.handleLiked(e)}>My Liked</button>
            <button id='matchesButton2' onClick={(e) => this.handleMatches(e)}>My Matches</button>
            </>
        ) 
    }
 }


const mapStateToProps = (state) => { return {users: state.users, user: state.user}}

export default connect(mapStateToProps)(Matches)
