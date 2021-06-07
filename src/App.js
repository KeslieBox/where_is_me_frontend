import NavBar from './NavBar'
import UsersContainer from './users/UsersContainer'
// import NewUserForm from './users/NewUserForm'
import {useEffect} from 'react'
import {connect} from 'react-redux'

function App(props) {
 
  return (
    <>
      <NavBar userId={props.user.id}/>
      <UsersContainer />
    </>
  );
}

const mapStateToProps = state => ({user: state.user})

export default connect(mapStateToProps)(App);
