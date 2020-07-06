import React, { Component } from "react";
import s from "./RegisterForm.module.css";
import { connect } from "react-redux";
import AvatarPicker from "../AvatarPicker/AvatarPicker";
import { registerUser } from "../../../../../redux/operations";
import ModalBackDrop from "../../../../modalBackDrop/ModalBackDrop";

class RegisterForm extends Component {
  state = {
    name: "",
    age: "",
    email: "",
    password: "",
    rePassword: "",
    errorRePassword: "",
    avatar: "https://go-to-goal.goit.co.ua/image/avatar_001.png",
    formErrors: { name: "", age: "", email: "", password: "" },
    formValid: false,
    nameValid: false,
    ageValid: false,
    emailValid: false,
    passwordValid: false,
    // onClose ???
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => this.validateField(name, value));
  };

  handleSubmitForm = (e) => {
    e.preventDefault();

    const { name, age, email, password, rePassword, avatar } = this.state;
    const { registerUser } = this.props;
    if (password === rePassword) {
      registerUser({
        name,
        email,
        password,
        age,
        avatar,
        isChild: true,
      });
    } else {
      this.setState({
        errorRePassword: "Паролі не співпадають!!!",
      });
    }
  };

  validateField = (fieldName, value) => {
    const {
      formErrors,
      nameValid,
      ageValid,
      emailValid,
      passwordValid,
    } = this.state;
    const fieldValidationErrors = formErrors;
    let fieldNameValid = nameValid;
    let fieldAgeValid = ageValid;
    let fieldEmailValid = emailValid;
    let fieldPasswordValid = passwordValid;
    switch (fieldName) {
      case "name":
        fieldNameValid =
          // eslint-disable-next-line no-useless-escape
          /^[a-zA-Zа-яА-Я\s]+[a-zA-Zа-яА-ЯёЁ'іІїЇ]{1,16}$/.test(value);
        fieldValidationErrors.name = fieldNameValid
          ? ""
          : "Вибач, але нам потрiбне iм'я вiд 2 до 12 символiв, яке мiстить тiльки лiтери...";
        break;

      case "age":
        fieldAgeValid =
          // eslint-disable-next-line no-useless-escape
          /^\d+$/.test(value) && value >= 3 && value <= 99;
        fieldValidationErrors.age = fieldAgeValid
          ? ""
          : `Вибач, але тобi має бути вiд 3 до 99 рокiв :)`;
        break;

      case "email":
        fieldEmailValid =
          // eslint-disable-next-line no-useless-escape
          /^([a-zA-Z0-9_\.-]+)@([a-zA-Z0-9_\.-]+)\.([a-zA-Z\.]{2,6})$/.test(
            value
          );
        fieldValidationErrors.email = fieldEmailValid
          ? ""
          : "Нажаль, таких email адрес не iснує...";
        break;

      case "password":
        fieldPasswordValid = value.length >= 6 && value.length <= 12;
        fieldValidationErrors.password = fieldPasswordValid
          ? ""
          : "Вибач, але нам потрiбен пароль вiд 6 до 12 символiв...";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        nameValid: fieldNameValid,
        ageValid: fieldAgeValid,
        emailValid: fieldEmailValid,
        passwordValid: fieldPasswordValid,
      },
      this.validateForm
    );
  };

  validateForm = () => {
    const { nameValid, ageValid, emailValid, passwordValid } = this.state;
    this.setState({
      formValid: nameValid && ageValid && emailValid && passwordValid,
    });
  };

  handleCloseModal = () => {
    this.props.history.push("/");
  };

  changeUserPic = (avatar) => {
    return this.setState({ avatar });
  };

  render() {
    const {
      name,
      age,
      email,
      password,
      rePassword,
      errorRePassword,
      formErrors,
      formValid,
      nameValid,
      ageValid,
      emailValid,
      passwordValid,
    } = this.state;
    const windowWidth = document.documentElement.clientWidth;

    return (
      <div className={s.reg_container}>
        <h1 className={s.title_h1}>Реєстрація</h1>
        <div className={s.form_container}>
          <form className={s.form} onSubmit={this.handleSubmitForm}>
            <h2 className={s.title_h2}>Дитина</h2>
            <div className={s.box_input}>
              {/* name */}
              <div className={s.current_input_box}>
                <input
                  maxLength="12"
                  required
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                  placeholder="Вкажи своє iм'я..."
                />
                <div className={s.error_name}>
                  {!formValid && !nameValid && (
                    <p className={s.registerAlert}>{formErrors.name}</p>
                  )}
                </div>
              </div>

              {/* age */}
              <div className={s.current_input_box}>
                <input
                  required
                  type="number"
                  name="age"
                  value={age}
                  onChange={this.handleChange}
                  placeholder="Вкажи свій вік..."
                />
                <div className={s.error_age}>
                  {!formValid && !ageValid && (
                    <p className={s.registerAlert}>{formErrors.age}</p>
                  )}
                </div>
              </div>

              {/* email */}
              <div className={s.current_input_box}>
                <input
                  required
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  placeholder="Введи свiй email/логiн..."
                />
                <div className={s.error}>
                  {!formValid && !emailValid && (
                    <p className={s.registerAlert}>{formErrors.email}</p>
                  )}
                </div>
              </div>

              {/* password */}
              <div className={s.current_input_box}>
                <input
                  required
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                  placeholder="Введи свiй пароль..."
                />
                <div className={s.error}>
                  {!formValid && !passwordValid && (
                    <p className={s.registerAlert}>{formErrors.password}</p>
                  )}
                </div>
              </div>

              {/* rePassword */}
              <div className={s.current_input_box}>
                <input
                  required
                  type="password"
                  name="rePassword"
                  value={rePassword}
                  onChange={this.handleChange}
                  placeholder="Підтверди пароль..."
                />
              </div>
            </div>
            <div className={s.error}>
              <p>{errorRePassword || ""}</p>
            </div>

            {windowWidth < 768 && (
              <AvatarPicker
                className={s.user_image_component}
                changeAvatar={this.changeUserPic}
              />
            )}

            <div className={s.box_btn}>
              <button type="button" onClick={this.handleCloseModal}>
                Назад
              </button>
              <button type="submit" disabled={!formValid}>
                Зареєструватися
              </button>
            </div>
          </form>

          {windowWidth >= 768 && (
            <AvatarPicker
              className={s.user_image_component}
              changeAvatar={this.changeUserPic}
            />
          )}
        </div>
      </div>
    );
  }
}

const mapDTP = {
  registerUser,
};

export default ModalBackDrop(connect(null, mapDTP)(RegisterForm));
