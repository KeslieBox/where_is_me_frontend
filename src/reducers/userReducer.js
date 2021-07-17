
export default function userReducer(state = {}, action){
    switch(action.type){
        case 'UPDATE_USER':
        debugger
            return action.payload
        case 'LOGOUT_USER':
        debugger
            return {username: '', id: ''}
        case 'INVALID_LOGIN':
            return {error: 'error'}
        default:
            return state
    }
}
