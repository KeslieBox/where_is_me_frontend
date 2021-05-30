
export default function usersReducer(state = {users: []}, action){
    switch(action.type){
        case 'ADD_USER':
            debugger
            return {users: [...state.users, action.payload]}
        // case 'FETCH_USERS':
        //     debugger
        //     return {}
        default:
            return state
    }
}
