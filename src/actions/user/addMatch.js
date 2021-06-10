export default function addMatch(userId, matchId) {
    return function (dispatch){
        fetch(`http://localhost:3000/matches`, {
            method: 'POST',
            headers: {Accept: "application/json", "Content-Type": "application/json"},
            body: JSON.stringify({match: {liker_id: userId, liked_id: matchId}})
        })
        .then(r => r.json())
        .then(m => {
            // is this where i should add the user to the frontend match?
            dispatch({type: 'UPDATE_USER', payload: m})
        }) 
    }
}