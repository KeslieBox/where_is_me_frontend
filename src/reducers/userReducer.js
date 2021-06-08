
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
            debugger
            return action.payload
            // return {...state.likedMatches, ...{likedMatches: action.payload}}
            // can i do this??: 
            // return {...state, action.payload[0])}
            // return {...state, ...state.likedMatches[0], ...action.payload[0]}
        default:
            return state
    }
}
