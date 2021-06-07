
export default function usersReducer(state = {}, action){
    switch(action.type){
        // combine add user and login user?
        case 'USER_SESSION':
            debugger
            return action.payload
        case 'LOGOUT_USER':
            return {username: ''}
        default:
            return state
    }
}
