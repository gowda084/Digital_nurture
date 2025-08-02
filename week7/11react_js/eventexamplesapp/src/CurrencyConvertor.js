import React, { Component } from "react";

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: "",
      currency: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { amount, currency } = this.state;
    const rate = 80; // 1 Euro = 80 INR
    const convertedAmount = amount * rate;
    alert(`Converting to ${currency} Amount is ${convertedAmount}`);
  };

  render() {
    return (
      <div style={{ marginTop: "30px" }}>
        <h1 style={{ color: "green" }}>Currency Convertor!!!</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Amount:
            <input
              type="number"
              name="amount"
              value={this.state.amount}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Currency:
            <textarea
              name="currency"
              value={this.state.currency}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default CurrencyConvertor;
