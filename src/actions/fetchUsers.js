export default function fetchUsers(user) {
    return function (dispatch){
        return fetch('http://localhost:3000/users/')
        .then(r => r.json())
        .then(users => {
            dispatch({type: 'FETCH_USERS', payload: users, user})
        })
    }
}