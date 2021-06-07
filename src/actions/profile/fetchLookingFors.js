export default function fetchLookingFors() {
    return function (dispatch){
        fetch('http://localhost:3000/looking_fors/')
        .then(r => r.json())
        .then(looking_fors => {
            dispatch({type: 'FETCH_LOOKING_FORS', payload: looking_fors})
        })
    }
}