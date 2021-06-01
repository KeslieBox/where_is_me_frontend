export default function fetchPronouns() {
    return function (dispatch){
        fetch('http://localhost:3000/pronouns/')
        .then(r => r.json())
        .then(pronouns => {
            dispatch({type: 'FETCH_PRONOUNS', payload: pronouns})
        })
    }
}