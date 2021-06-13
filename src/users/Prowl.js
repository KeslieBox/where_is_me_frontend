import { Component } from "react";
import { connect } from "react-redux";
import addMatch from '../actions/user/addMatch'

 
 class Prowl extends Component {

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
        return(
            <>
            <ul>
                {/* {this.props.users && this.props.users.map(u => <><li key={u.id} >{u.username}</li> <button id={u.id} onClick={(e) => this.handleClick(e)}>Like</button></>)} */}
                {/* to figure out how not to show the current user profile */}

                {this.props.users && this.props.users.map(u => (
                        <><li key={u.id}>{u.username}</li> 
                        <button id={u.id} onClick={(e) => this.handleClick(e)}>Like</button>
                        </>
                    )
                )}
            </ul>
            {/* <Route exact path={`/users/${this.props.user.id}`} render={(routerProps) => <Matches {...routerProps} />}/> */}

            </>
        ) 
    }
 }


 const mapStateToProps = (state) => { return {users: state.users, user: state.user, matches: state.matches }}

 export default connect(mapStateToProps, {addMatch})(Prowl)