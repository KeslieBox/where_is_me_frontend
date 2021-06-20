export default function errorMessage(user){
    debugger
    return function(dispatch){
        dispatch({type: 'INVALID_LOGIN'} )
    }

    // return {type: 'LOGOUT_USER'} 
}