export default function fetchUsers() {
    debugger
    return function (dispatch){
        fetch('http://localhost:3000/users/')
        .then(r => r.json())
        .then(users => {
            console.log(users)
            debugger
            dispatch({type: 'FETCH_USERS', payload: users})
        })
    }
}