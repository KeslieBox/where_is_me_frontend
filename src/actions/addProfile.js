export default function addProfile(user, history) {
    debugger
    return function (dispatch){
        // how to send userid
        fetch(`http://localhost:3000/users/${user.id}`, {
            method: 'PATCH',
            headers: {Accept: "application/json", "Content-Type": "application/json"},
            body: JSON.stringify({user})
        })
        .then(r => r.json())
        .then(u => {
            debugger
            dispatch({type: 'ADD_PROFILE', payload: u})
            // do i want to redirect here or from the form?
            history.push(`/users/${u.id}`)
        }) 
    }
}