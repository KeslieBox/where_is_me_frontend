export default function profileReducer(state = {}, action){
    switch(action.type){
        case 'FETCH_CATEGORY':
            return {...state, [action.category]: action.payload}
        default:
            return state
    }
}
