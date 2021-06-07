// combine this action with login??

export default function userSignup(user, history) {
    return function (dispatch){
        fetch('http://localhost:3000/users/', {
            method: 'POST',
            headers: {Accept: "application/json", "Content-Type": "application/json"},
            body: JSON.stringify({user})
        })
        .then(r => r.json())
        .then(u => {
            dispatch({type: 'USER_SESSION', payload: u})
            history.push(`/users/${u.id}`)
        }) 
    }
}