import {connect} from 'react-redux'
import Checkbox from './Checkbox'

function Category(props){

    const categoryName = props.category.charAt(0).toUpperCase() + props.category.slice(1)

    // trying to create a table of checkboxes
    // const createRows = (category) => {
    //     debugger
    //     const array = []
    //     for(let x=0; x < category.length; x+2 ){
    //         array.push(category.slice(x, x+2))   
    //     }
    //     return array
    // }

    return (     
        <>
           <h3>{categoryName}</h3>
            
            {/* trying to figure out how to create a table of checkboxes */}
            {/* create function that returns 'array' from above and pass in .props.profile to use in for loop in function*/}
            {/* {props.profile[props.category] && createRows(props.profile[props.category]).map((instance, i) => { */}
  
            {props.profile[props.category] && props.profile[props.category].map((instance, i) =>  { 
                    return <>
                        {/* <tr> */}
                            {/* {loop through baby array} */}
                            <Checkbox key={i} handleClick={props.handleClick} c={props.category} i={instance} form={props.form}/>
                        {/* </tr> */}
                    </>
            })} 
        </>
    )
}

const mapStateToProps = (state) => {return {users: state.users, profile: state.profile, user: state.user}}

export default connect(mapStateToProps)(Category)