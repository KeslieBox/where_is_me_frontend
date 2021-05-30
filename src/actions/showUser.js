export default function showUser(user){
    debugger
    return function(dispatch){
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {Accept: "application/json", "Content-Type": "application/json"},
            body: JSON.stringify({user})
        })
        .then(r => r.json())
        // need error handling
        .then(u => {dispatch({type: 'SHOW_USER', payload: u})})
    }    
}