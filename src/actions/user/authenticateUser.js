
export default function authenticateUser(id){
    return function(dispatch){
        fetch('http://localhost:3000/authenticate', {
            method: 'POST',
            headers: {Accept: "application/json", "Content-Type": "application/json"},
            body: JSON.stringify({user: {id}})
        })
        .then(r => r.json())
        // need error handling
        .then(u => {
            dispatch({type: 'UPDATE_USER', payload: u})
            // history.push(`/users/${u.id}`)
        })
    }    
}