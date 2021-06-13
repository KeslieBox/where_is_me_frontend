import NavBar from './navbar/NavBar'
import UsersContainer from './users/UsersContainer'
import {connect} from 'react-redux'
// import {withRouter} from 'react-router-dom'

function App(props) {
 
  return (
    <>
      <NavBar userId={props.user.id}/>
      <UsersContainer />
    </>
  );
}

const mapStateToProps = state => ({user: state.user, users: state.users, profile: state.profile})

export default connect(mapStateToProps)(App)
// export default withRouter(connect(mapStateToProps)(App))
