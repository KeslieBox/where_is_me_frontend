
export default function usersReducer(state = {users: []}, action){
    switch(action.type){
        case 'ADD_USER':
            debugger
            return {users: [...state.users, action.payload]}
            debugger
        case 'FETCH_USERS':
            return {users: action.payload}
        // do i need this??
        // case 'SHOW_USER':
        //     return {users: [state.users.find(u => u.id === action.payload.id)]}
        default:
            return state
    }
}
