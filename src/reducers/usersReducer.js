
export default function usersReducer(state = [], action){
    switch(action.type){
        case 'FETCH_USERS':
            debugger
            // return {...state, users: action.payload}
            return action.payload
        default:
            return state
    }
}
