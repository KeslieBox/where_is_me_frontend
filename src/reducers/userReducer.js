
export default function userReducer(state = {}, action){
    switch(action.type){
        case 'USER_SESSION':
            debugger
            return action.payload
        case 'LOGOUT_USER':
            return {username: ''}
        case 'ADD_PROFILE':
            return action.payload
        case 'ADD_MATCH':
            return {...state, ...{matches: action.payload}}
        default:
            return state
    }
}
