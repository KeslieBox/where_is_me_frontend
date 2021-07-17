export default function profileReducer(state = {}, action){
    switch(action.type){
        case 'FETCH_CATEGORY':
            return {...state, [action.category]: action.payload}
        case 'FETCH_MUTUAL_CATEGORY':
            debugger
            return {...state, [action.category]: action.payload}
        default:
            return state
    }
}
