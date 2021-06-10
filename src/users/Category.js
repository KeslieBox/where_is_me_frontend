import {connect} from 'react-redux'
import Checkboxes from './Checkboxes'

function Category(props) {
    debugger

    const categoryName = props.category.charAt(0).toUpperCase() + props.category.slice(1)
    return (
        <>
           <h3>{categoryName}</h3>
           {props.profile[props.category] && props.profile[props.category].map(i =>  {  
                return <>
                    <Checkboxes handleClick={props.handleClick} c={props.category} i={i} form={props.form}/>
                </>
            })} 
        </>
    )


}

const mapStateToProps = (state) => {return {users: state.users, profile: state.profile, user: state.user}}

export default connect(mapStateToProps)(Category)