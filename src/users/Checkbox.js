import React from 'react'
import { Component } from 'react'
import {connect} from 'react-redux'
import fixString from './fixString'

class Checkbox extends Component {
    constructor(props){
        super(props)

        const categoryIdsString = () => fixString(props.c)
        // this.fixString(props.c)
        this.state = {
            checkedStatus: this.props.user[categoryIdsString()] && this.props.user[categoryIdsString()].includes(this.props.i.id) ? true : false,
            categoryIdsString: categoryIdsString()
        }
    }


    componentDidUpdate(prevProps){
        if (!prevProps.user.id && this.props.user[categoryIdsString] !== undefined && this.props.user[categoryIdsString].includes(this.props.i.id)){

            this.setState({
              checkedStatus: this.props.form.checked
            })
        }
    }

    handleChange = (e, name) => {
        
        this.setState({
            checkedStatus: e.target.checked 
        })
        this.props.handleClick(e.target, name)
    }

    
    // fixString = (category) => {
    //     if (category === 'identities'){
    //        return categoryIdsString = `${category.split('ies')[0]}yIds`
    //     } else if (category === 'statuses'){
    //        return categoryIdsString = `${category.split('es')[0]}Ids`
    //     } else if (category === 'interests'){
    //        return categoryIdsString = `${category.split('s')[0]}stIds`
    //     } else if (category === 'looking_fors'){
    //        return categoryIdsString = `${category.split('_fors')[0]}ForIds`
    //     } else {
    //        return categoryIdsString = `${category.split('s')[0]}Ids`
    //     }
    // }
   

    render() {
        
        return ( 
            <>
                {/* need to figure out 'checked' */}
                {/* <input type="checkbox" onClick={(e) => this.handleClick(e, this.props.i.name)}  name={this.props.i.name} key={this.props.i.id} id={this.props.i.id} className={this.props.c}/> */}
                <input type="checkbox" onChange={(e) => this.handleChange(e, this.props.i.id)} checked={this.state.checkedStatus} name={this.props.i.name} key={this.props.i.id} id={this.props.i.id} className={this.state.categoryIdsString}/>                
                <label className='checboxLabel' htmlFor={this.props.i.name}>{this.props.i.name}</label><br/>
            </>
        )
    }
}

const mapStateToProps = (state) => {return {users: state.users, profile: state.profile, user: state.user}}
let categoryIdsString 

export default connect(mapStateToProps) (Checkbox)