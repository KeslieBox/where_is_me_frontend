export default function userLogout(user, history){
    debugger
    return function(dispatch){
        // fetch('http://localhost:3000/users', {
        //     method: 'POST',
        //     headers: {Accept: "application/json", "Content-Type": "application/json"},
        //     body: JSON.stringify({user})
        // })
        // .then(r => r.json())
        // // need error handling
        // .then(u => {
        //     debugger
            dispatch({type: 'LOGOUT_USER', payload: u})
        //     history.push(`/users/${u.id}`)
        // })

        debugger
    }    
}