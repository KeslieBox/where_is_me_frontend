
export default function authenticateUser(id){
    return function(dispatch){
        fetch('http://localhost:3000/authenticate', {
            method: 'POST',
            headers: {Accept: "application/json", "Content-Type": "application/json"},
            body: JSON.stringify({user: {id}})
        })
        .then(r => r.json())
        .then(u => {
            debugger
            dispatch({type: 'UPDATE_USER', payload: u})
        })
    }    
}