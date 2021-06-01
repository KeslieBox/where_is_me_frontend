import NavBar from './NavBar'
import UsersContainer from './users/UsersContainer'
// import NewUserForm from './users/NewUserForm'
import {useEffect} from 'react'
import {connect} from 'react-redux'

function App(props) {
  debugger
  // same as componentDidMount
  useEffect(() => {
    // use this to set the current user??

  }, [])

  return (
    <>
      {/* <NavBar userId={props.user.id}/> */}
      <NavBar />
      <UsersContainer />
      {/* <NewUserForm /> */}
    </>
  );
}

const mapStateToProps = state => ({user: state.user})

export default connect(mapStateToProps)(App);
