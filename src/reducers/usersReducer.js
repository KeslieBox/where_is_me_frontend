
export default function usersReducer(state = [], action){
    switch(action.type){
        case 'ADD_USER':
            return {users: [...state.users, action.payload]}
        case 'FETCH_USERS':
            return [...state, ...action.payload]
        // do i need this??
        // case 'SHOW_USER':
        //     return {users: [state.users.find(u => u.id === action.payload.id)]}
        default:
            return state
    }
}
