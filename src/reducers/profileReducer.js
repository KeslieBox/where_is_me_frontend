export default function profileReducer(state = {}, action, category){
    switch(action.type){
        case 'FETCH_CATEGORY':
            return {...state, [action.category]: action.payload}

        default:
            return state
    }
}
