export default function userLogin(user, path){
    debugger
    return function(dispatch){
        fetch(`http://localhost:3000${path}`, {
            method: 'POST',
            headers: {Accept: "application/json", "Content-Type": "application/json"},
            body: JSON.stringify({user})
        })
        .then(r => r.json())
        // need error handling
        .then(u => {
            debugger
            dispatch({type: 'USER_SESSION', payload: u})
        })
    }    
}

