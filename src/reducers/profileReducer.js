export default function profileReducer(state = {}, action){
    debugger
    switch(action.type){
        case 'FETCH_IDENTITIES':
            return {...state, identities: action.payload}
        case 'FETCH_INTERESTS':
            return {...state, interests: action.payload}
        case 'FETCH_LOOKING_FORS':
            return {...state, looking_fors: action.payload}
        case 'FETCH_POLITICS':
            return {...state, politics: action.payload}
        case 'FETCH_PRONOUNS':
            return {...state, pronouns: action.payload}
        case 'FETCH_STATUSES':
            return {...state, statuses: action.payload}
        default:
            return state
    }
}
