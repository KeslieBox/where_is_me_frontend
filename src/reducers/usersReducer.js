
export default function usersReducer(state = [], action){
    switch(action.type){
        case 'FETCH_USERS':
            return action.payload
        // case 'USER_SESSION':
        //     debugger
        //     return state.filter(u => u.id !== action.payload.id)     
        default:
            return state
    }
}
