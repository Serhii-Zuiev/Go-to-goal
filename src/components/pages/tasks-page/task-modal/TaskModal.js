import React, { useState } from "react";
// import shortid from "shortid";
import s from "./taskmodal.module.css";
import Select from "react-select";
// const keyforElement = shortid.generate();

const IDS = {
  INPUT_VALUE: "title",
  INPUT_POINT: "points",
  SELECT_DATA: "deadline",
};

const options = [
  { value: "8.00-10", label: "8.00-10.00" },
  { value: "10.00-12.00", label: "10.00-12.00" },
  { value: "12.00-14.00", label: "12.00-14.00" },
  { value: "14.00-16.00", label: "14.00-16.00" },
  { value: "16.00-18.00", label: "16.00-18.00" },
  { value: "18.00-20.00", label: "18.00-20.00" },
  { value: "20.00-22.00", label: "20.00-22.00" },
];
const findOpt = (value) => options.find((opt) => opt.value === value);

function TaskModal() {
  const [state, setState] = useState({
    [IDS.INPUT_VALUE]: "",
    [IDS.INPUT_POINT]: "",
    [IDS.SELECT_DATA]: "",
  });
  console.log("state", state);
  //   state = {
  //     inputValue: "",
  //     inputPoint: "",
  //     selectData: "",
  //     isEnterTime: false,
  //     timeError: "",
  //   };
  //   handleChgange = (e) => {
  //     this.setState({ [e.target.name]: e.target.value });
  //   };

  const handleChgange = (e) => {
    const { id, value } = e.target;

    setState((currentState) => ({
      ...currentState,
      [id]: value,
    }));
  };

  const onFormSubmit = () => {
    fetch("https://go-to-goal.goit.co.ua/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    }).then((res) => console.log(res));
  };

  const onChangeSelect = (opt) => {
    setState({
      [IDS.SELECT_DATA]: opt.value,
    });
  };

  //   const { inputValue } = this.state;
  return (
    <div className={s.modal_container}>
      <form className={s.form} onSubmit={onFormSubmit}>
        <p className={s.title}>Що зробити?</p>
        <input
          type="text"
          //   name="inputValue"
          placeholder="(Оберіть завдання або додай нове)"
          maxLength="20"
          minLength="3"
          id={IDS.INPUT_VALUE}
          value={state[IDS.INPUT_VALUE]}
          onChange={handleChgange}
          className={s.input_task}
        />
        <div className={s.input_options_section}>
          <Select
            placeholder="Час"
            required
            options={options}
            onChange={onChangeSelect}
            id={IDS.SELECT_DATA}
            value={findOpt(state[IDS.SELECT_DATA])} //check
            className={s.input_options}
          />
        </div>
        <input
          type="text"
          //   name="inputValue"
          placeholder="ВИНАГОРОДА (наприклад 1000)"
          maxLength="20"
          minLength="3"
          id={IDS.INPUT_POINT}
          value={state[IDS.INPUT_POINT]}
          onChange={handleChgange}
          className={s.input_task}
        />
        <button type="submit" className={s.buttonOk}>
          OK
        </button>
      </form>
    </div>
  );
}

export default TaskModal;
