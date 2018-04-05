import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

export default class Header extends Component {
  // could set state here
  constructor(props) {
    super(props);
    console.log("Constructor");
  }
  // The render function! Gotta return something
  // first construtor, then willmount,
  // then render, then didMount
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React, Dave</h1>
      </header>
    );
  }
}
