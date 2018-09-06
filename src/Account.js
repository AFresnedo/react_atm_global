import React, { Component } from 'react';

export default class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      balance: 0
    };

    this.handleTransactionClick = this.handleTransactionClick.bind(this);
  }

  handleTransactionClick(e) {
    e.preventDefault();
    if (isNaN(this.refs.amount.value) || this.refs.amount.value < 0) {
      console.log('Not a number');
    }
    else if (e.target.value === 'Withdraw') {
      if (this.refs.amount.value > this.state.balance) {
        console.log('No credit here!');
      }
      else {
        let amount = -this.refs.amount.value;
        let newBalance = this.state.balance + amount;
        this.setState({
          balance: newBalance
        });
        this.refs.amount.value = '';
      }
    }
    else {
      let amount = +this.refs.amount.value;
      let newBalance = this.state.balance + amount;
      this.setState({
        balance: newBalance
      });
      this.refs.amount.value = '';
    }
  }

  render() {
    let balanceClass = 'balance';
    if (this.state.balance === 0) {
      balanceClass += ' zero';
    }

    return (
      <div className='account'>
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>${this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref="amount" />
        <input type="button" value="Deposit" onClick={this.handleTransactionClick} />
        <input type="button" value="Withdraw" onClick={this.handleTransactionClick} />
      </div>
    );
  }
}
