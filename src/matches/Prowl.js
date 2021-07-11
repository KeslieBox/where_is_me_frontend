import { connect } from "react-redux";
import {useState} from 'react'
import addMatch from '../actions/user/addMatch'

 
 function CurrentMatch (props){

    const [index, setIndex] = useState({slide: 0});
    const newMatches = props.users && props.users.filter(u => u.id !== props.user.id && !props.user.liked.some(user => user.id === u.id))
    const match = newMatches[index.slide]

    const handleSelect = (e) => {
        setIndex(prevIndex => {
           if(newMatches[prevIndex.slide] !== undefined){
                    return {...prevIndex.slide, slide: prevIndex.slide + 1}
            }else {
                return {...prevIndex, slide: 0}
            }
        })
    }

    const handleClick = (e) => {
        debugger
        e.preventDefault()
        const likedId = parseInt(match.id)
        if (!props.user.liked.find(u => u.id === likedId) && props.user.id !== likedId) {
            props.addMatch(props.user.id, likedId)
        }
    }
    
    return(
        <>
        <p key={match !== undefined ? match.id : ''}> 
            {match !== undefined ?  
                <div className='matchProfile'>
                    <h3 id='matchProHeader'>
                    {match.username}
                    </h3>
                    {match.pronouns.length > 0 ? 
                        <>
                        <ul id='matchProLabel'>Pronouns:</ul>
                            {match.pronouns.map(i => 
                                <li id='matchProLi'>{i.name}</li>
                            )}
                        </> 
                        : ''
                    }
                    {match.statuses.length > 0 ? 
                        <>
                        <ul id='matchProLabel'>Status:</ul>
                            {match.statuses.map(i => 
                                <li id='matchProLi'>{i.name}</li>
                            )}
                        </>
                        : ''
                    }
                    {match.identities.length > 0 ? 
                        <>
                        <ul id='matchProLabel'>Identity:</ul>
                            {match.identities.map(i => 
                                <li id='matchProLi'>{i.name}</li>
                            )}
                        </>
                        : ''
                    }
                    {match.lookingFors.length > 0 ? 
                        <>
                        <ul id='matchProLabel'>Looking For:</ul>
                        {match.lookingFors.map(i => 
                            <li id='matchProLi'>{i.name}</li>
                        )} 
                        </>
                        : ''
                    }
                    {match.interests.length > 0 ? 
                        <>
                        <ul id='matchProLabel'>Interests:</ul>
                            {match.interests.map(i => 
                                <li id='matchProLi'>{i.name}</li>
                            )} 
                        </>
                        : ''
                    }
                    {match.politics.length > 0 ? 
                        <>
                        <ul id='matchProLabel'>Politics:</ul>
                        {match.politics.map(i => 
                            <li id='matchProLi'>{i.name}</li>
                        )} 
                        </>
                        : ''
                    } 
                    <button id='nextButton' onClick={(e) => handleSelect(e)}> 👎 </button>                                     
                    <button id='likeButton' onClick={(e) => handleClick(e)}> 👍 </button>
                </div> 
                : <div className='matchProfile'> You're all out of matches! Please check back later! </div>
            } 
        </p>   
        </>
    ) 
 }


 const mapStateToProps = (state) => { return {users: state.users, user: state.user }}

 export default connect(mapStateToProps, {addMatch})(CurrentMatch)