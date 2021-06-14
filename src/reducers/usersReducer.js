
export default function usersReducer(state = [], action){
    switch(action.type){
        case 'FETCH_USERS':
            debugger
            // if(action.user && action.user.id !== undefined){
            //     return state.filter(u => u.id !== action.user.id)
            // } else {
                return action.payload
            // }
            // return {...state, users: action.payload}
        case 'USER_SESSION':
            debugger
            return state.filter(u => u.id !== action.payload.id)     
        default:
            return state
    }
}
