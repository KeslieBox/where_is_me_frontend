import errorMessage from './errorMessage'

export default function userLogin(user, path, history){
    return function(dispatch){
        fetch(`http://localhost:3000${path}`, {
            method: 'POST',
            headers: {Accept: "application/json", "Content-Type": "application/json"},
            body: JSON.stringify({user})
        })
        .then(r => r.json())
        .then(u => {
            if (u.message){
                errorMessage()
            } else {
                dispatch({type: 'UPDATE_USER', payload: u})
            }
        })
    }    
}