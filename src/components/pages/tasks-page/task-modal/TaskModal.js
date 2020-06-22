import React, { Component } from 'react';
import shortid from "shortid";
import s from "./taskmodal.module.css"
import Select from "react-select"


const keyforElement = shortid.generate()
const options =[
    {value:'8.00-10', label:"8.00-10.00"},
    {value:"10.00-12.00", label:"10.00-12.00"},
    {value:"12.00-14.00", label:"12.00-14.00"},
    {value:"14.00-16.00", label:"14.00-16.00"},
    {value:"16.00-18.00", label:"16.00-18.00"},
    {value:"18.00-20.00", label:"18.00-20.00"},
    {value:"20.00-22.00", label:"20.00-22.00"}
]
const findOpt = value => options.find(opt => opt.value === value)
class TaskModal extends Component {
    state = {
        inputValue:"",
        inputPoint:"",
        selectData: '',
        isEnterTime: false,
        timeError: '',
      }
      handleChgange=e=>{
          this.setState({[e.target.name]: e.target.value})
      }
      onChangeSelect = opt => {
        this.setState({
          selectData: opt.value,
          isEnterTime: true,
          timeError: '',
        });
      };
    render() {
        const{inputValue}=this.state
        return (
            <div className={s.modal_container}>
            <form className={s.form}>
                <input type="text" name="inputValue" 
                placeholder="ЩО ЗРОБИТИ (Оберіть завдання або додай нове)" 
                maxLength="20" minLength="3" onChange={this.handleChgange}
                className={s.input_task}
                />
                <div className={s.input_options_section}>
                    <Select required 
                    options={options} 
                    onChange={this.onChangeSelect} 
                    value={findOpt(selectData)}
                    className={s.input_options}/>
                    Час
                    </Select>
                    {}
                </div>
                <button type="button" className={s.buttonOk}>OK</button>

            </form>
            </div>
        );
    }
}

export default TaskModal;