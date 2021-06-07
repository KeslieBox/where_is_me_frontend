
export default function matchesReducer(state = [], action){
    switch(action.type){
        case 'ADD_MATCH':
            debugger
            return action.payload
        default:
            return state
    }
}
