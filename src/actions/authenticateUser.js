
export default function authenticateUser(user){
    debugger
    return function(dispatch){
        fetch('http://localhost:3000/authenticate', {
            method: 'POST',
            headers: {Accept: "application/json", "Content-Type": "application/json"},
            body: JSON.stringify({user})
        })
        .then(r => r.json())
        // need error handling
        .then(u => {
            debugger
            dispatch({type: 'LOGIN_USER', payload: u})
            // history.push(`/users/${u.id}`)
        })
    }    
}