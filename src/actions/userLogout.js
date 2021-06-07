export default function userLogout(history){
    debugger
    return function(dispatch){
        // do i need to do anything on backend??
        dispatch({type: 'LOGOUT_USER'})
        history.push('/users')
    }    
}