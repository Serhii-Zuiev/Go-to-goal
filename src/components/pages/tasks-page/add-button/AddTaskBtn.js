import React, { Component } from 'react'
import s from "./style.module.css"

class AddTaskBtn extends Component {
    state = { 
     }
     
    render() {

        return (
            <div>
            <button type="button" 
            className={s.button} 
            onClick={this.props.handleOpenModalWindow}>+</button>
           </div>
        );
    }
}

export default AddTaskBtn;