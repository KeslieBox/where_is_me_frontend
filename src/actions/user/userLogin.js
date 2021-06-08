// export default function userLogin(user){
//     debugger
//     return function(dispatch){
//         fetch('http://localhost:3000/login', {
//             method: 'POST',
//             headers: {Accept: "application/json", "Content-Type": "application/json"},
//             body: JSON.stringify({user})
//         })
//         .then(r => r.json())
//         // need error handling
//         .then(u => {
//             dispatch({type: 'USER_SESSION', payload: u})
//         })
//     }    
// }


export default function userLogin(user, path, history){
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
            debugger
            history.push(`/users/${u.id}`)
        })
    }    
}