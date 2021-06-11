import React, {useState, useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const AddTransaction = () => {
  const {addTransaction} = useContext(GlobalContext);
  const [text, setText] = useState(' ');
  const [amount, setAmount] = useState(' ');

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    };

    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Add a Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text"> Description </label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter a Description..."
          />
        </div>

        <div className="form-control">
          <label htmlFor="amount"> Amount </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter any amount... "
          />
        </div>
        <label> (Expenses = -x.xx / Huat = x.xx )</label>
        <button className="btn">Proceed</button>
      </form>
    </>
  );
};
