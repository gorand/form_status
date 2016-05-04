import React, {Component} from 'react';
import classNames from 'classnames';

export default class FormHead extends Component {

  constructor (props) {
    super(props);
    this.state = {
      edit: false,
      status: this.props.status,
      link: this.props.link,
      validate: null,
      animate: false
    };
  }

  isEditing() {
    if (this.state.edit) {
      this.setState({
        edit: false,
        link: this.props.link
      });
    } else {
      this.setState({
        edit: true,
        link: 'Сохранить'
      });
    }
  }

  setValidateMessage(msg) {
    this.setState({
      validate: msg
    });
  }

  showValidate(text) {
    if (text.length === 0) {
      this.setValidateMessage('Поле статуса будет пустым'); 
    } else if (text.length > 75) {
      this.setValidateMessage('Рекомендуемая длина статуса 75 символов'); 
    }
    else {
      this.setValidateMessage(null);  
    }
  }

  handleDoubleClick(e) {
    this.isEditing();
  }

  handleClickLink(e) {
    e.preventDefault()
    if (this.state.status.length > 75) {
      this.setState({
        animate: true
      });
      return false;
    }
    this.isEditing();
    this.setValidateMessage(null);  
    this.setState({
      animate: false
    });
  }

  handleChangeInput(e) {
    this.showValidate(e.target.value);
    this.setState({
      status: e.target.value
    });
  }

  handleKeyInput(e) {
    if (e.which === 13) {
      if (this.state.status.length > 75) {
        this.setState({
          animate: true
        });
        return false;
      }
      this.isEditing();
      this.setValidateMessage(null);  
      this.setState({
        animate: false
      });
    }
  }

  render() {
    return (
      <div className='form__head'>
        <div className='form__head-title'>Здравствуйте, </div>
        <div className='form__head-user'>
          <span className='form__head-user-name'> Человек № 3596941</span>
          <a href='#' onClick={this.handleClickLink.bind(this)} className='form__head-user-link'>{this.state.link}</a>
          <div className='form__head-status'>
            <div 
              className={classNames('form__head-status-text', {'is-hide': this.state.edit, 'is-show': !this.state.edit})}
              onDoubleClick={this.handleDoubleClick.bind(this)}>
                {this.state.status}
            </div>
            <input
              className={classNames('form__head-status-field', {'is-show': this.state.edit, 'is-hide': !this.state.edit})}
              value={this.state.status} 
              type='text' 
              onChange={this.handleChangeInput.bind(this)}
              onKeyDown={this.handleKeyInput.bind(this)}
            />
          </div>
          <div className={classNames('form__head-validate', {animate: this.state.animate})}>{this.state.validate}</div>
        </div>
      </div>
    );
  }  
}