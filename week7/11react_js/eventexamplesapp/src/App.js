import React, { Component } from "react";
import CurrencyConvertor from "./CurrencyConvertor";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 5 };

    this.increment = this.increment.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayHello() {
    alert("Hello! Member1");
  }

  handleIncrement() {
    this.increment();
    this.sayHello();
  }

  sayWelcome(message) {
    alert(message);
  }

  handleClick = (e) => {
    alert("I was clicked");
  };

  render() {
    return (
      <div style={{ margin: "20px" }}>
        <p>{this.state.count}</p>

        <button onClick={this.handleIncrement}>Increment</button>
        <br />
        <button onClick={this.decrement}>Decrement</button>
        <br />
        <button onClick={() => this.sayWelcome("welcome")}>Say welcome</button>
        <br />
        <button onClick={this.handleClick}>Click on me</button>

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
