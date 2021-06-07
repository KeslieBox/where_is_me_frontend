export default function fetchPolitics() {
    return function (dispatch){
        fetch('http://localhost:3000/politics/')
        .then(r => r.json())
        .then(politics => {
            dispatch({type: 'FETCH_POLITICS', payload: politics})
        })
    }
}