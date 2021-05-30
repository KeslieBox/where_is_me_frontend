// import Users from './Users'
// import User from './User'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import NewUserForm from './NewUserForm'
import addUser from '../actions/addUser'
import fetchUsers from '../actions/fetchUsers'

function UsersContainer(){
  
    return (
        <>
        <p>UsersContainer</p>
          {/* <Switch> */}
            <Route path="/users/signup">
              <NewUserForm />
            </Route>
            {/* <Route exact path="/lists">
              <Users />
            </Route> */}
            {/* <Route path='/users/:id' render={(routerProps) => <User {...routerProps}/>}/> */}
          {/* </Switch> */}
        </>
      )
}

// export default UsersContainer
export default connect(null, {fetchUsers})(UsersContainer)