import React, { Component } from 'react';
import FormHead from './FormHead';
import FormBody from './FormBody';

export default class App extends Component {

  render() {
    return (
      <div className='form'>
        <FormHead status='Прежде чем действовать, надо понять' link='Сменить статус' />
        <FormBody />
      </div>
    );
  }  
}