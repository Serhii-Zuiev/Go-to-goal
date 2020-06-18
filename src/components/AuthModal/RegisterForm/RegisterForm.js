import React, { Component } from 'react';
import s from './RegisterForm.module.css';



export default  class RegistrationForm extends Component {
  

  state = {
    name: '',
    age: '',
    email: '',
    password: '',
    rePassword: '',
    
  };

  
  render() {
   

    return (
      <div className={s.reg_container}>
        <h1 className={s.title_h1}>Реєстрація</h1>
        <div className={s.form_container}>
          <form className={s.form} >
            <h2 className={s.title_h2}>Дитина</h2>
            <div className={s.box_input}>
              {/* name */}
              <div className={s.current_input_box}>
                <input
                  maxLength="12"
                  required
                  type="text"
                  name="name"
                  
                  
                  placeholder="Ім'я..."
                />
              </div>

              {/* age */}
              <div className={s.current_input_box}>
                <input
                  required
                  type="number"
                  name="age"
                
                  
                  placeholder="Вік..."
                />
              </div>

              {/* email */}
              <div className={s.current_input_box}>
                <input
                  required
                  type="email"
                  name="email"
                
                 
                  placeholder="Email"
                />
              </div>

              {/* password */}
              <div className={s.current_input_box}>
                <div className={s.box_showPassword}>
                  <input
                    required
                    // type={password}
                    name="password"
            
                   
                    placeholder="Пароль..."
                  />
                </div>
              </div>

              {/* rePassword */}
              <div className={s.current_input_box}>
                <div className={s.box_showPassword}>
                  <input
                    required
                    // type={password"}
                    name="rePassword"
                    // value={rePassword}
                   
                    placeholder="Підтверди пароль..."
                  />
                </div>
              </div>
            </div>
           
            <div className={s.box_btn}>
              <button type="button" >
                Назад
              </button>
              <button type="submit">
                Ok
              </button>
            </div>
          </form>

          
        </div>
      </div>
    );
  }
}
