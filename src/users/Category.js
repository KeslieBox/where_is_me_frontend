import {connect} from 'react-redux'
import Checkboxes from './Checkboxes'
import {Component} from 'react'

// class Category extends Component {
//     constructor(props){
//         super(props)
//     }

function Category(props){

    createRows = (category) => {
        debugger
        const array = []
        for(let x=0; x < category.length; x+2 ){
            array.push(category.slice(x, x+2))   
        }
        return array
    }
    
    // render() {
        const categoryName = props.category.charAt(0).toUpperCase() + props.category.slice(1)
        
    return (     
        <>
           <h3>{categoryName}</h3>
            
            {/* create function that returns 'array' from above and pass in .props.profile to use in for loop in function*/}
            {/* {props.profile[props.category] && createRows(props.profile[props.category]).map(i => { */}
            {props.profile[props.category] && props.profile[props.category].map(i =>  { 
                    return <>
                        <tr>/
                            {/* {loop through baby array} */}
                            <Checkboxes handleClick={props.handleClick} c={props.category} i={i} form={props.form}/>
                        </tr>/
                    </>
            })} 
        </>
    )
// }

}




const mapStateToProps = (state) => {return {users: state.users, profile: state.profile, user: state.user}}

export default connect(mapStateToProps)(Category)