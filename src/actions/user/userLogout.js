export default function userLogout(history){
    debugger
    return function(dispatch){
        dispatch({type: 'LOGOUT_USER'} )
    }

    // return {type: 'LOGOUT_USER'} 
}