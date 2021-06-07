
export default function userReducer(state = {}, action){
    switch(action.type){
        case 'USER_SESSION':
            return action.payload
        case 'LOGOUT_USER':
            return {username: ''}
        case 'ADD_PROFILE':
            return action.payload
        // case 'ADD_MATCH':
        //     debugger
        //     return {}
        default:
            return state
    }
}
