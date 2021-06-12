export default function fetchCategories(category) {
    return function (dispatch){
        fetch(`http://localhost:3000/${category}/`)
        .then(r => r.json())
        .then(c => {
            dispatch({type: 'FETCH_CATEGORY', payload: c, category})
        })
    }
}