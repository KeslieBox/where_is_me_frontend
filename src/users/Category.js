import {connect} from 'react-redux'
import Checkboxes from './Checkboxes'

function Category(props) {
    return (
        <>
           <h3>{props.name}</h3>
           {props.profile[props.category] && props.profile[props.category].map(i =>  {  
                return <>
                    <Checkboxes handleClick={props.handleClick} c={props.category} i={i}/>
                </>
            })} 
        </>
    )


}

const mapStateToProps = (state) => {return {users: state.users, profile: state.profile, user: state.user}}

export default connect(mapStateToProps)(Category)