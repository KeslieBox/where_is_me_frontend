export default function fetchStatuses() {
    return function (dispatch){
        fetch('http://localhost:3000/statuses/')
        .then(r => r.json())
        .then(statuses => {
            dispatch({type: 'FETCH_STATUSES', payload: statuses})
        })
    }
}