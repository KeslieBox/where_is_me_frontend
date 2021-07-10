import Carousel from 'react-bootstrap/Carousel'
import {useState} from 'react'
import { connect } from "react-redux";
import addMatch from '../actions/user/addMatch'
import CurrentMatch from './CurrentMatch'

function CarouselComponent(props) {
    debugger
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    }

    const handleClick = (e) => {
        e.preventDefault()
        const likedId = parseInt(props.u.id)
        if (!props.user.liked.find(u => u.id === likedId) && props.user.id !== likedId) {
            props.addMatch(props.user.id, likedId)
        }
    }

    const newMatches = props.users && props.users.filter(u => u.id !== props.user.id && !props.user.liked.some(user => user.id === u.id))
    
    return (
      // <Carousel activeIndex={props.i} onSelect={handleSelect}> 
        // <Carousel.Item>
          
          // {/* <Carousel.Caption> */}
      
            <p key={props.u.id}> {props.u.username} 
                <button id='likeButton' onClick={(e) => handleClick(e)}>Like</button>
            </p>
            

            // {/* {newMatches.map(u => {
            //     debugger
            //     return <CurrentMatch user={u} />
            // })} */}
            
          // {/* </Carousel.Caption> */}
        // {/* </Carousel.Item> */}
      // </Carousel>
    );
  }

  const mapStateToProps = (state) => { return {users: state.users, user: state.user}}

  export default connect(mapStateToProps, {addMatch}) (CarouselComponent)