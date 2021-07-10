export default function errorMessage(user){
    return function(dispatch){
        dispatch({type: 'INVALID_LOGIN'} )
    }

    // return {type: 'LOGOUT_USER'} 
}