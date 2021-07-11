// import { connect } from "react-redux";
// import addMatch from '../actions/user/addMatch'

// function CurrentMatch (props){

//     const handleClick = (e) => {
//         e.preventDefault()
//         const likedId = parseInt(props.user.id)
//         if (!props.user.liked.find(u => u.id === likedId) && props.user.id !== likedId) {
//             props.addMatch(props.user.id, likedId)
//         }
//     }

//     const newMatches = props.users && props.users.filter(u => u.id !== props.user.id && !props.user.liked.some(user => user.id === u.id))
    
//     return(
//         <>
//         {/* <button onClick={(e) => handleSelect(e, index.slide)}>next</button> */}
//         <p key={newMatches[index.slide] !== undefined ? newMatches[index.slide].id : ''}> 
//             {newMatches[index.slide] !== undefined ?  
//                 <div id='matchProfile'>
//                     <h3 id='matchProHeader'>
//                     {newMatches[index.slide].username}, 
//                     {newMatches[index.slide].pronouns.length > 0 ? newMatches[index.slide].pronouns.map(i => 
//                         <span>{i.name}</span>
//                     ) : ''}
//                     </h3>
//                     {newMatches[index.slide].statuses.length > 0 ? 
//                         <>
//                         <ul id='matchProLabel'>Status:</ul>
//                             {newMatches[index.slide].statuses.map(i => 
//                                 <li id='matchProLi'>{i.name}</li>
//                             )}
//                         </>
//                         : ''
//                     }
//                     {newMatches[index.slide].identities.length > 0 ? 
//                         <>
//                         <ul id='matchProLabel'>Identities:</ul>
//                             {newMatches[index.slide].identities.map(i => 
//                                 <li id='matchProLi'>{i.name}</li>
//                             )}
//                         </>
//                         : ''
//                     }
//                     {newMatches[index.slide].lookingFors.length > 0 ? 
//                         <>
//                         <ul id='matchProLabel'>Looking For:</ul>
//                         {newMatches[index.slide].lookingFors.map(i => 
//                             <li id='matchProLi'>{i.name}</li>
//                         )} 
//                         </>
//                         : ''
//                     }
//                     {newMatches[index.slide].interests.length > 0 ? 
//                         <>
//                         <ul id='matchProLabel'>Interests:</ul>
//                             {newMatches[index.slide].interests.map(i => 
//                                 <li id='matchProLi'>{i.name}</li>
//                             )} 
//                         </>
//                         : ''
//                     }
//                     {newMatches[index.slide].politics.length > 0 ? 
//                         <>
//                         <ul id='matchProLabel'>Politics:</ul>
//                         {newMatches[index.slide].politics.map(i => 
//                             <li id='matchProLi'>{i.name}</li>
//                         )} 
//                         </>
//                         : ''
//                     }  
//                     <button id='likeButton' onClick={(e) => handleClick(e)}>Like</button>
//                 </div> 
//                 : ''
//             } 
            
//         </p>
//         </>
//     ) 
// }

// export default CurrentMatch