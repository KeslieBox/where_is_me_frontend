export default function updateProfile(user) {
    return function (dispatch){
        fetch(`http://localhost:3000/users/${user.id}`, {
            method: 'PATCH',
            headers: {Accept: "application/json", "Content-Type": "application/json"},
            body: JSON.stringify({user})
        })
        .then(r => {
            if (r.ok) {
                return r.json();
              } else {
                throw new Error('Something went wrong');
              }
        })
        .then(u => {
            console.log('update action')
            dispatch({type: 'UPDATE_USER', payload: u})
        }) 
        .catch((error) => {
            console.log(error)
          })
    }
}