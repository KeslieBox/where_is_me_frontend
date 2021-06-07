export default function addMatch(userId) {
    debugger
    return function (dispatch){
        fetch(`http://localhost:3000/users/${userId}`, {
            method: 'PATCH',
            headers: {Accept: "application/json", "Content-Type": "application/json"},
            body: JSON.stringify({user: {userId}})
        })
        .then(r => r.json())
        .then(u => {
            debugger
            // is this where i should add the user to the frontend match?
            dispatch({type: 'ADD_MATCH', payload: u})
        }) 
    }
}