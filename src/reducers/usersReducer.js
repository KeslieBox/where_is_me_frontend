
export default function usersReducer(state = [], action){
    debugger
    switch(action.type){
        case 'ADD_USER':
            debugger
            return [...state, action.payload]
        case 'FETCH_USERS':
            debugger
            return [...state, ...action.payload]
        // do i need this??
        case 'LOGIN_USER':
            return [action.payload]
        case 'LOGOUT_USER':
            debugger
            return {}
        default:
            return state
    }
}
