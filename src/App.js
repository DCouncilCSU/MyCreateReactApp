import React, { Component } from 'react';
import Header from './components/Header.js';
import './App.css';

//const PLAID_PUBLIC_KEY = "ed385ad7421ac6f7fc5c6506d25dce";

class App extends Component {

  // could set state here
  constructor(props) {
    super(props);
    console.log("Constructor");
  }

  // will not trigger a rerender
  componentWillMount() {
    console.log("will mount");
  }

  // your component will exist here
  // good place to put google map code, or
  // get some data from another API
  // will trigger rerender, but browser won't see it (try not to do)
  componentDidMount() {
    console.log("mounted");
  }

  // Define state variables here,
  // instead of constructor
  state = {
    toggle: true
  }

  // Simple debug function
  handleClick = () => {
    console.log("You Clicked");
  };

  // Changes state variable toggle between true/false
  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  // The render function! Gotta return something
  // first construtor, then willmount,
  // then render, then didMount
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          <button onClick={this.showTodos}>Todos for graham</button>
          <button onClick={this.toggle}>Show/Hide</button>
        </p>
        {this.state.toggle &&
          <FlashingText toggle={this.state.toggle} />
        }
      </div>
    );
  }
}

class FlashingText extends Component {
  render() {
    const { toggle } = this.props;
    console.log(toggle);

    return(
      <p>This will show and hide</p>
    );
  }
}

export default App;
