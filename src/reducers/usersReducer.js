
export default function usersReducer(state = [], action){
    switch(action.type){
        case 'FETCH_USERS':
            // return {...state, users: action.payload}
            return action.payload
        // case 'ADD_MATCH':
        //     const findUser = action.payload.liked[action.payload.liked.length-1]
        //     debugger
        //     findUser.likers.push(action.payload)
        //     return state.map(u => u.id === findUser.id ? findUser : u)
        default:
            return state
    }
}
