// export default function fetchIdentities() {
//     return function (dispatch){
//         fetch('http://localhost:3000/identities/')
//         .then(r => r.json())
//         .then(identities => {
//             dispatch({type: 'FETCH_IDENTITIES', payload: identities})
//         })
//     }
// }

export default function fetchCategories(category) {
    debugger
    return function (dispatch){
        fetch(`http://localhost:3000/${category}/`)
        .then(r => r.json())
        .then(c => {
            debugger
            dispatch({type: 'FETCH_CATEGORY', payload: c, category})
        })
    }
}