export default function deleteInstance(i, user) {
    debugger
    //should this go to update the user's instance of this category?? how to do that
    return function (dispatch){
        // what route do i send to?? patch request to user??
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