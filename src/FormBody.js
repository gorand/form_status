import React, {Component} from 'react';

export default class FormBody extends Component {

  render() {
    return (
      <div className='form__body'>
        <div className='form__body-group'>
          <label className='form__body-title'>Пароль</label>
          <input className='form__body-field' type='password' />
          <div className='form__body-info'>Ваш новый пароль должен содержать не менее 5 символов.</div>
        </div>        
        <div className='form__body-group'>
          <label className='form__body-title'>Пароль еще раз</label>
          <input className='form__body-field' type='password' />
          <div className='form__body-info'>Повторите пароль, пожалуйста, это обезопасит вас с нами на случай ошибки.</div>
        </div>        
        <div className='form__body-group form__body-group--separator'>
          <label className='form__body-title'>Электронная почта</label>
          <input className='form__body-field' type='email' />
          <div className='form__body-info'>Можно изменить адрес, указанный при регистрации. </div>
        </div>        
        <div className='form__body-group'>
          <div className='form__body-title'>Я согласен</div>
          <input id='agreement' className='form__body-check' type='checkbox' />
          <label htmlFor='agreement' className='form__body-label'>принимать актуальную информацию на емейл</label>
        </div>        
        <div className='form__body-group'>
          <input className='form__body-button' type='submit' value='Изменить' />
          <label className='form__body-info'>последние изменения 15 мая 2012 в 14:55:17</label>
        </div>        
      </div>
    );
  }
}