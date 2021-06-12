export default function updateProfile(user) {
    debugger
    return function (dispatch){
        fetch(`http://localhost:3000/users/${user.id}`, {
            method: 'PATCH',
            headers: {Accept: "application/json", "Content-Type": "application/json"},
            body: JSON.stringify({user})
        })
        .then(r => r.json())
        .then(u => {
            dispatch({type: 'UPDATE_PROFILE', payload: u})
            // history.push(`/users/${u.id}/profile`)
        }) 
    }
}