export default function fetchUsers() {
    return function (dispatch){
        fetch('http://localhost:3000/users/')
        .then(r => r.json())
        .then(users => {
            dispatch({type: 'FETCH_USERS', payload: users})
        })
    }
}