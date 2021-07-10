import { connect } from "react-redux";
import {useState} from 'react'
import addMatch from '../actions/user/addMatch'

 
 function Prowl (props){

    const [state, setState] = useState({input: 0})

    const handleClick = (e, u) => {
        e.preventDefault()
        const likedId = parseInt(u.id)
        if (!props.user.liked.find(u => u.id === likedId) && props.user.id !== likedId) {
            props.addMatch(props.user.id, likedId)
        }
    }

    const handleChange = (e) => {
        if (typeof e.target.value === 'number' || typeof parseInt(e.target.value) === 'number'){
            setState(prevState => {
                return {...prevState, input: parseInt(e.target.value)}
            })
        }
    }

    const incrementCount = (id) => {
        setState(prevState => {
            if(prevState[id]){
                return {...prevState, [id]: prevState[id] + prevState.input}
            }else {
                return {...prevState, [id]: prevState.input}
            }
        })
    }

    const resetCount = (id) => {
        setState(prevState => {
            return {...prevState, [id]: 0}
        })
    }

    const newMatches = props.users && props.users.filter(u => u.id !== props.user.id && !props.user.liked.some(user => user.id === u.id))
    return(
        <>
        {/* <form>
            <label id='incrementLabel'>Enter a number to increment here:</label>
            <input id='prowlIncrement' type="text" onChange={(e) => handleChange(e)}/>
        </form> */}
        
        <ul>
            {newMatches.map(u => {
                return <>
                    
                    <li key={u.id}>{u.username} 
                    <button id='likeButton' onClick={(e) => handleClick(e, u)}>Like</button>
                    </li>
                    {/* <p>Count {state[u.id]}</p>
                    <button onClick={(e) => incrementCount(u.id)}>+</button>
                    <button onClick={(e) => resetCount(u.id)}>Reset Count</button> */}
                </>
            })}
        </ul>
        </>

// {newMatches.map(u => {
//     return <>
//         <span>
//         <li id='prowlLi' key={u.id}>{u.username}</li> 
        
//         <div id='countDiv'>
//         <label htmlFor='count' id='prowlSpan'> Count {state[u.id]}</label>
//         <button id='count' onClick={(e) => incrementCount(u.id)}>+</button>
//         <button id='count' onClick={(e) => resetCount(u.id)}>Reset Count</button>
//         <button className='prowl' id='likeButton' id={u.id} onClick={(e) => handleClick(e)}>Like</button>
//         </div>
//         </span>
//     </>
// })}
    ) 
 }


 const mapStateToProps = (state) => { return {users: state.users, user: state.user }}

 export default connect(mapStateToProps, {addMatch})(Prowl)