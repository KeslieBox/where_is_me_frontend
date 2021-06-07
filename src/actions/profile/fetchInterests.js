export default function fetchInterests() {
    return function (dispatch){
        fetch('http://localhost:3000/interests/')
        .then(r => r.json())
        .then(interests => {
            dispatch({type: 'FETCH_INTERESTS', payload: interests})
        })
    }
}