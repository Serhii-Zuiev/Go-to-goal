import React from 'react';
import s from './LoginPage.module.css';


const LoginForm = ({
  onSubmit,
  onChange,
  email,
  password,
  formValid,
}) => {
  return (
    <form onSubmit={onSubmit} className={s.form}>
      <input
        type="email"
        name="email"
        value={email}
        onChange={onChange}
        required
        placeholder="Введiть свiй email..."
      />
      <div>
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          required
          placeholder="Введiть свiй пароль..."
        />
      </div>
      <button type="submit" disabled={!formValid} className={s.log_btn}>
        Увiйти
      </button>
    </form>
  );
};

LoginForm.defaultProps = {
  email: '',
};


export default LoginForm;
