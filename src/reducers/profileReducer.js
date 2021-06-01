export default function profileReducer(state = [], action){
    switch(action.type){
        case 'FETCH_PRONOUNS':
            return [...state, ...action.payload]
        default:
            return state
    }
}
