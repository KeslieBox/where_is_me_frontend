export default function addUser(user) {
    debugger
    return function (dispatch){
        fetch('http://localhost:3000/users/', {
            method: 'POST',
            headers: {Accept: "application/json", "Content-Type": "application/json"},
            body: JSON.stringify({user})
        })
        .then(r => r.json())
        .then(u => {dispatch({type: 'ADD_USER', payload: u})})
    }
}