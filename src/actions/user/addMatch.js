export default function addMatch(userId, matchId) {
    debugger
    return function (dispatch){
        fetch(`http://localhost:3000/match`, {
            method: 'POST',
            headers: {Accept: "application/json", "Content-Type": "application/json"},
            body: JSON.stringify({liker_id: userId, liked_id: matchId})
        })
        .then(r => r.json())
        .then(u => {
            debugger
            // is this where i should add the user to the frontend match?
            dispatch({type: 'ADD_MATCH', payload: u})
        }) 
    }
}