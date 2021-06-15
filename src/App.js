import NavBar from './navbar/NavBar'
import UsersContainer from './UsersContainer'
import {connect} from 'react-redux'

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
