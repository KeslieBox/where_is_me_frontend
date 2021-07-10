import { connect } from "react-redux";
import {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import addMatch from '../actions/user/addMatch'
import CarouselComponent from './CarouselComponent'


 
 function CurrentMatch (props){

    const [index, setIndex] = useState(0);
    const [state, setState] = useState({match: 0})
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    }

    const handleClick = (e) => {
        e.preventDefault()
        const likedId = parseInt(props.user.id)
        if (!props.user.liked.find(u => u.id === likedId) && props.user.id !== likedId) {
            props.addMatch(props.user.id, likedId)
        }
    }

    const nextMatch = (e, id) => {
        debugger
        setState(prevState => {
            debugger
            if(newMatches[prevState.match] !== undefined){
                return {...prevState, match: prevState.match + 1}
            }else {
                return {...prevState, match: 0}
            }
        })
    }

    const newMatches = props.users && props.users.filter(u => u.id !== props.user.id && !props.user.liked.some(user => user.id === u.id))
    debugger
    return(
        // <>
        // <p key={props.user.id}> {props.user.username} 
        //     <button id='likeButton' onClick={(e) => handleClick(e)}>Like</button>
        // </p>
        // </>
        <>
        {/* <Carousel >  */}
        {/* {newMatches.map((u, i) => { */}
            {/* debugger
            // return <CarouselComponent i={i} u={u} />
            return <>
                 <Carousel> 
                    <Carousel.Item> */}
                    {/* <Carousel.Caption> */}
                    {/* <CarouselComponent i={i} u={u} /> */}
                        {/* <p key={u.id}> {u.username} 
                            <button id='likeButton' onClick={(e) => handleClick(e)}>Like</button>
                        </p> */}

                        {/* {newMatches.map(u => {
                            debugger
                            return <CurrentMatch user={u} />
                        })} */}
                        
                    {/* </Carousel.Caption> */}
                    {/* </Carousel.Item>
            </Carousel> 
            </> */}
        {/* })} */}

        
        {/* </Carousel> */}
                
                <button onClick={(e) => nextMatch(e, state.match)}>next</button>
                 <Carousel> 
                    <Carousel.Item>
                    {/* <Carousel.Caption> */}
                    {/* <CarouselComponent i={i} u={u} /> */}
                    {/* <p> hi */}
                        <p key={newMatches[state.match] !== undefined ? newMatches[state.match].id : ''}> 
                            {newMatches[state.match] !== undefined ?  
                                <div id='matchProfile'>
                                    <h3 id='matchProHeader'>
                                    {newMatches[state.match].username}, 
                                    {newMatches[state.match].pronouns.map(i => 
                                        <span>{i.name}</span>
                                    )}
                                    </h3>
                                    <ul id='matchProLabel'>Status:</ul>
                                        {newMatches[state.match].statuses.map(i => 
                                            <li id='matchProLi'>{i.name}</li>
                                        )}
                                    <ul id='matchProLabel'>Identities:</ul>
                                        {newMatches[state.match].identities.map(i => 
                                            <li id='matchProLi'>{i.name}</li>
                                        )}
                                     <ul id='matchProLabel'>Looking For:</ul>
                                        {newMatches[state.match].lookingFors.map(i => 
                                            <li id='matchProLi'>{i.name}</li>
                                        )}    
                                    <ul id='matchProLabel'>Interests:</ul>
                                        {newMatches[state.match].interests.map(i => 
                                            <li id='matchProLi'>{i.name}</li>
                                        )} 
                                     <ul id='matchProLabel'>Politics:</ul>
                                        {newMatches[state.match].politics.map(i => 
                                            <li id='matchProLi'>{i.name}</li>
                                        )}   
                                    <button id='likeButton' onClick={(e) => handleClick(e)}>Like</button>
                                </div> 
                                : ''
                            } 
                            
                        </p>
                        

                        {/* {newMatches.map(u => {
                            debugger
                            return <CurrentMatch user={u} />
                        })} */}
                        
                    {/* </Carousel.Caption> */}
                    </Carousel.Item>
            </Carousel> 
            
            
            
        </>




    ) 
 }


 const mapStateToProps = (state) => { return {users: state.users, user: state.user }}

 export default connect(mapStateToProps, {addMatch})(CurrentMatch)