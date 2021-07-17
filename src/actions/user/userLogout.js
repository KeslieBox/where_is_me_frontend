export default function userLogout(){
    debugger
    return function(dispatch){
        dispatch({type: 'LOGOUT_USER'})
    }
}