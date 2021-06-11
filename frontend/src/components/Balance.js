import React from 'react';
import { useContext } from 'react';
import {GlobalContext} from '../context/GlobalState';

export const Balance = () => {
  const {transactions} = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2); // fixed to 2 decimal place

  return (
    <>
      <h4> Balance in Wallet </h4>
      <h1>${total}</h1>
    </>
  ); 
};
