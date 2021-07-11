import { connect } from "react-redux";
import {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import addMatch from '../actions/user/addMatch'
import CarouselComponent from './CarouselComponent'


 
 function CurrentMatch (props){

    // const [index, setIndex] = useState(0);
    const [index, setIndex] = useState({slide: 0});
    const [state, setState] = useState({match: 0})
  
    // const handleSelect = (selectedIndex, e) => {
    //     debugger
    //   setIndex(selectedIndex);
    // }

    const handleSelect = (selectedIndex, e) => {
        setIndex(prevIndex => {
           if(newMatches[prevIndex.slide] !== undefined){
                    return {...prevIndex.slide, slide: prevIndex.slide + 1}
            }else {
                return {...prevIndex, slide: 0}
            }
        })
    }

    const handleClick = (e) => {
        e.preventDefault()
        const likedId = parseInt(props.user.id)
        if (!props.user.liked.find(u => u.id === likedId) && props.user.id !== likedId) {
            props.addMatch(props.user.id, likedId)
        }
    }

    const newMatches = props.users && props.users.filter(u => u.id !== props.user.id && !props.user.liked.some(user => user.id === u.id))
    
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
                <div>
                {/* <button id='nextButton' onClick={(e) => handleSelect(e, index.slide)}> {'not my type >>'} </button> */}
                </div>
                 {/* <Carousel onSelect={handleSelect}>  */}
                    {/* <Carousel.Item> */}
                    {/* <Carousel.Caption> */}
                    {/* <CarouselComponent i={i} u={u} /> */}
                        <p key={newMatches[index.slide] !== undefined ? newMatches[index.slide].id : ''}> 
                            {newMatches[index.slide] !== undefined ?  
                                <div className='matchProfile'>
                                    <h3 id='matchProHeader'>
                                    {newMatches[index.slide].username}
                                    </h3>
                                    {newMatches[index.slide].pronouns.length > 0 ? 
                                        <>
                                        <ul id='matchProLabel'>Pronouns:</ul>
                                            {newMatches[index.slide].pronouns.map(i => 
                                                <li id='matchProLi'>{i.name}</li>
                                            )}
                                        </> 
                                        : ''
                                    }
                                    {newMatches[index.slide].statuses.length > 0 ? 
                                        <>
                                        <ul id='matchProLabel'>Status:</ul>
                                            {newMatches[index.slide].statuses.map(i => 
                                                <li id='matchProLi'>{i.name}</li>
                                            )}
                                        </>
                                        : ''
                                    }
                                    {newMatches[index.slide].identities.length > 0 ? 
                                        <>
                                        <ul id='matchProLabel'>Identity:</ul>
                                            {newMatches[index.slide].identities.map(i => 
                                                <li id='matchProLi'>{i.name}</li>
                                            )}
                                        </>
                                        : ''
                                    }
                                    {newMatches[index.slide].lookingFors.length > 0 ? 
                                        <>
                                        <ul id='matchProLabel'>Looking For:</ul>
                                        {newMatches[index.slide].lookingFors.map(i => 
                                            <li id='matchProLi'>{i.name}</li>
                                        )} 
                                        </>
                                        : ''
                                    }
                                    {newMatches[index.slide].interests.length > 0 ? 
                                        <>
                                        <ul id='matchProLabel'>Interests:</ul>
                                            {newMatches[index.slide].interests.map(i => 
                                                <li id='matchProLi'>{i.name}</li>
                                            )} 
                                        </>
                                        : ''
                                    }
                                    {newMatches[index.slide].politics.length > 0 ? 
                                        <>
                                        <ul id='matchProLabel'>Politics:</ul>
                                        {newMatches[index.slide].politics.map(i => 
                                            <li id='matchProLi'>{i.name}</li>
                                        )} 
                                        </>
                                        : ''
                                    } 
                                    {/* <span>/ */}
                                    <button id='nextButton' onClick={(e) => handleSelect(e, index.slide)}> 👎 </button>                                     
                                    <button id='likeButton' onClick={(e) => handleClick(e)}>👍</button>
                                    {/* </span> */}
                                </div> 
                                : <div className='matchProfile'> You're out of matches! Check back later! </div>
                            } 
                        </p>
                        

                        {/* {newMatches.map(u => {
                            debugger
                            return <CurrentMatch user={u} />
                        })} */}
                        
                    {/* </Carousel.Caption> */}
                    {/* </Carousel.Item> */}
            {/* </Carousel>  */}
            
            
            
        </>




    ) 
 }


 const mapStateToProps = (state) => { return {users: state.users, user: state.user }}

 export default connect(mapStateToProps, {addMatch})(CurrentMatch)