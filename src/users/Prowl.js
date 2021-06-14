import { Component } from "react";
import { connect } from "react-redux";
import addMatch from '../actions/user/addMatch'
import fetchUsers from '../actions/fetchUsers'

 
 class Prowl extends Component {

    // componentDidMount = async() => {
    //     debugger
    //     await this.props.fetchUsers(this.props.user)
    // }

    handleClick = (e) => {
        e.preventDefault()
        const likedId = parseInt(e.target.id)
        debugger
        if (!this.props.user.liked.find(u => u.id === likedId) && this.props.user.id !== likedId) {
            this.props.addMatch(this.props.user.id, likedId)
        }
    }

    // users reducer when fetch all users when someone logs in, create case called logged in or all logged in to use throughout app
    render() {
        // const seenProfiles = []
        // const matchTester = this.props.users && this.props.users.map(u => { 
        //     debugger
        //     if (!seenProfiles.includes(u)) {seenProfiles.push(u)} 
        // })

        const newMatches = this.props.users && this.props.users.filter(u => u.id !== this.props.user.id && !this.props.user.liked.some(user => user.id === u.id))
        return(
            <>
            <ul>
                {newMatches.map(u => {
                    debugger
                    return <>
                        <li key={u.id}>{u.username}</li> 
                        <button id={u.id} onClick={(e) => this.handleClick(e)}>Like</button>
                    </>
                })}
            </ul>
            </>
        ) 
    }
 }


 const mapStateToProps = (state) => { return {users: state.users, user: state.user, matches: state.matches }}

 export default connect(mapStateToProps, {addMatch, fetchUsers})(Prowl)