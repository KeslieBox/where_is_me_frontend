
export default function userReducer(state = {}, action){
    switch(action.type){
        case 'UPDATE_USER':
            debugger
            return action.payload
        case 'LOGOUT_USER':
            return {username: '', id: ''}
        case 'INVALID_LOGIN':
            debugger
            return {error: 'error'}
        default:
            return state
    }
}
