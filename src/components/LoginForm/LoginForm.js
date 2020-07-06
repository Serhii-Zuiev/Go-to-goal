import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";

import styles from "./LoginForm.module.css";
import { loginUser } from "../../redux/operations";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let mainerror = true;

  const dispatch = useDispatch();

  const validate = () => {
    const errors = {};
    if (!email) {
      errors.email = "Потрібен email";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Невірна email адреса...";
    }
    if (!password) {
      errors.password = "Потрібен пароль";
    } else if (password.length < 6) {
      errors.password = "Повнно бути більше 6 знаків";
    }
    if (Object.keys(errors).length === 0) {
      mainerror = false;
    } else {
      mainerror = true;
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = {
      email: email,
      password: password,
    };
    if (mainerror === false) {
      addContact(contact, e.target.value);
    } else {
      setEmail("");
      setPassword("");
    }
  };

  const addContact = async (contact, value) => {
    if (value === "LOGIN_USER") {
      dispatch(loginUser(contact));
    }
    await setEmail("");
    await setPassword("");
  };

  const handleChange = async (e) => {
    e.target.name === "email"
      ? setEmail(e.target.value)
      : setPassword(e.target.value);
  };

  return (
    <div className={styles.authContainer}>
      <form className={styles.form}>
        <input
          className={styles.input}
          type="email"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          required
          placeholder={
            formik.errors.email ? formik.errors.email : "Введіть Email"
          }
          onChange={handleChange}
          value={email}
        />
        <input
          className={styles.input}
          type="password"
          name="password"
          required
          placeholder={
            formik.errors.password ? formik.errors.password : "Введіть password"
          }
          onChange={handleChange}
          value={password}
        />
        <div className={styles.log_btn}>
          <button
            className={styles.btn}
            type="submit"
            value="LOGIN_USER"
            onClick={(e) => {
              formik.handleSubmit();
              handleSubmit(e);
            }}
          >
            Увійти
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
