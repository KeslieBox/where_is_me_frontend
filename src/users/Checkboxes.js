import React from 'react'
import { Component } from 'react'
import {connect} from 'react-redux'

class Checkboxes extends Component {
    constructor(props){
        super(props)
        // let categoryIdsString
        if (props.c === 'identity'){
            categoryIdsString = `${props.c.split('ies')[0]}yIds`
        } else if (props.c === 'statuses'){
            categoryIdsString = `${props.c.split('es')[0]}Ids`
        } else if (props.c === 'interests'){
            categoryIdsString = `${props.c.split('s')[0]}stIds`
        } else if (props.c === 'looking_fors'){
            categoryIdsString = `${props.c.split('_fors')[0]}ForIds`
        } else {
            categoryIdsString = `${props.c.split('s')[0]}Ids`
        }
        this.state = {
            checkedStatus: this.props.user[categoryIdsString] && this.props.user[categoryIdsString].includes(this.props.i.id) ? true : false,
            categoryIdsString: categoryIdsString
        }
    }

    // componentDidMount(){
    //     debugger
    //     this.setState({
    //         checkedStatus: this.props.user[this.props.c] !== undefined && this.props.user[this.props.c].some(x => x.name === this.props.i.name) ? true : false
    //     })
    // }

    componentDidUpdate(prevProps){
        if (!prevProps.user.id && this.props.user[categoryIdsString] !== undefined && this.props.user[categoryIdsString].includes(this.props.i.id)){
            debugger

            this.setState({
              checkedStatus: prevProps.form.checked
            })
        }
    }

    handleClick = (e, name) => {
        debugger
        this.setState({
            checkedStatus: e.target.checked 
        })
        this.props.handleClick(e, name)
    }

    
    // fixString = (category) => {
    //     if (category.includes('ies')){
    //         return categoryIdsString = `${category.split('ies')[0]}y_ids`
    //     } else if (category.includes('es') && !category.includes('est')){
    //         return categoryIdsString = `${category.split('es')[0]}_ids`
    //     } else if (category.includes('ests')){
    //         return categoryIdsString = `${category.split('s')[0]}st_ids`
    //         } else {
    //         return categoryIdsString = `${category.split('s')[0]}_ids`
    //     }
    // }
   

    render() {
        
        return ( 
            <>
                {/* need to figure out 'checked' */}
                {/* <input type="checkbox" onClick={(e) => this.handleClick(e, this.props.i.name)}  name={this.props.i.name} key={this.props.i.id} id={this.props.i.id} className={this.props.c}/> */}
                <input type="checkbox" onClick={(e) => this.handleClick(e, this.props.i.id)} checked={this.state.checkedStatus} name={this.props.i.name} key={this.props.i.id} id={this.props.i.id} className={this.state.categoryIdsString}/>                
                <label htmlFor={this.props.i.name}>{this.props.i.name}</label><br/>
            </>
        )
    }
}

const mapStateToProps = (state) => {return {users: state.users, profile: state.profile, user: state.user}}
let categoryIdsString 

export default connect(mapStateToProps) (Checkboxes)