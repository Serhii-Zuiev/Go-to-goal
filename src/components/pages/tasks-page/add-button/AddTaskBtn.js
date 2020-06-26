import React, { Component } from 'react'
import s from "./style.module.css"

class AddTaskBtn extends Component {
    state = {  }
    render() {
        return (
            <>
            <button type="button" className={s.btn} onClick={this.props.handleChangeModalWindow}>+</button>
            </>
        );
    }
}

export default AddTaskBtn;