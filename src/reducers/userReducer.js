
export default function userReducer(state = {}, action){
    switch(action.type){
        case 'UPDATE_USER':
            console.log('update reducer')
            return action.payload
        case 'LOGOUT_USER':
            return {username: ''}
        default:
            return state
    }
}
