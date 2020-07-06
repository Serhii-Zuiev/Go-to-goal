import React, { useState } from "react";
import ModalBackDrop from "../../../modalBackDrop/ModalBackDrop";
import s from "./taskmodal.module.css";
import Select from "react-select";

const IDS = {
  INPUT_VALUE: "title",
  INPUT_POINT: "points",
  SELECT_DATA: "deadline",
};

const options = [
  { value: "8.00-10.00", label: "8.00-10.00" },
  { value: "10.00-12.00", label: "10.00-12.00" },
  { value: "12.00-14.00", label: "12.00-14.00" },
  { value: "14.00-16.00", label: "14.00-16.00" },
  { value: "16.00-18.00", label: "16.00-18.00" },
  { value: "18.00-20.00", label: "18.00-20.00" },
  { value: "20.00-22.00", label: "20.00-22.00" },
];
const findOpt = (value) => options.find((opt) => opt.value === value);

function TaskModal(props) {
  const handleFormforUsers = props.handleFormforUsers;
  const handleCloseModalWindow = props.handleCloseModalWindow;
  const [state, setState] = useState({
    [IDS.INPUT_VALUE]: "",
    [IDS.INPUT_POINT]: "",
    [IDS.SELECT_DATA]: "",
  });

  const handleForm = (e) => {
    e.preventDefault();
    const task = {
      title: state["title"],
      points: state["points"],
      deadline: state["deadline"],
    };
    if (!task.deadline) {
      return;
    }
    handleFormforUsers(task);
    handleCloseModalWindow();
  };

  const handleChgange = (e) => {
    const { id, value } = e.target;
    setState((currentState) => ({
      ...currentState,
      [id]: value,
    }));
  };

  const onChangeSelect = (opt) => {
    setState((currentState) => ({
      ...currentState,
      [IDS.SELECT_DATA]: opt.value,
    }));
  };

  return (
    <div className={s.modal_container}>
      <form className={s.form} onSubmit={handleForm}>
        <p className={s.title_form}>Що зробити?</p>
        <input
          type="text"
          placeholder="(Додай нове завдання)"
          maxLength="20"
          minLength="3"
          name="title"
          id={IDS.INPUT_VALUE}
          value={state[IDS.INPUT_VALUE]}
          onChange={handleChgange}
          className={s.input_task}
          required
        />
        <div className={s.inputs_containers}>
          <div className={s.input_options_section}>
            <Select
              placeholder="Час"
              required
              options={options}
              onChange={onChangeSelect}
              id={IDS.SELECT_DATA}
              value={findOpt(state[IDS.SELECT_DATA])}
              className={s.input_options}
            />
          </div>
          <input
            type="number"
            placeholder="Винагорода (наприклад 1000)"
            maxLength="5"
            minLength="1"
            max="9999"
            min="1"
            id={IDS.INPUT_POINT}
            value={state[IDS.INPUT_POINT]}
            onChange={handleChgange}
            className={s.input_options_input}
            required
          />
        </div>
        <button type="submit" className={s.button}>
          OK
        </button>
      </form>
    </div>
  );
}

export default ModalBackDrop(TaskModal);
